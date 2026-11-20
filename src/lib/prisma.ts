import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma";

// Reuse a single PrismaClient across hot-reloads in dev and across warm
// serverless invocations in production to avoid exhausting DB connections.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  pool: pg.Pool | undefined;
};

function createClient() {
  const rawUrl = process.env.DATABASE_URL || "";
  const isRemote = rawUrl.includes("supabase") || rawUrl.includes("sslmode=");

  // Strip sslmode from connection URL so pg-connection-string does not force
  // verify-full and reject Supabase pooled connection SSL certificates
  const connectionString = isRemote
    ? rawUrl.replace(/[?&]sslmode=[^&]+/, "").replace(/\?$/, "")
    : rawUrl;

  const pool =
    globalForPrisma.pool ??
    new pg.Pool({
      connectionString,
      ssl: isRemote ? { rejectUnauthorized: false } : undefined,
    });

  globalForPrisma.pool = pool;

  // Prisma 7 connects through a JS driver adapter rather than a bundled engine.
  const adapter = new PrismaPg(pool);
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createClient();
globalForPrisma.prisma = prisma;
