import { getJobs } from "@/lib/jobs";
import { CleanCareersBoard } from "@/components/CleanCareersBoard";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let initialJobs: Awaited<ReturnType<typeof getJobs>>["jobs"] = [];
  try {
    const jobsResult = await getJobs({ pageSize: 50 });
    initialJobs = jobsResult.jobs;
  } catch (err) {
    console.error("Error retrieving jobs for home page:", err);
  }

  return <CleanCareersBoard initialJobs={initialJobs} />;
}
