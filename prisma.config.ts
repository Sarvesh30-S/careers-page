import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// Prisma 7 moves connection configuration out of schema.prisma and into this
// file. The runtime PrismaClient connects via a driver adapter (see
// src/lib/prisma.ts); this config is what the Prisma CLI uses for migrate/seed.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
