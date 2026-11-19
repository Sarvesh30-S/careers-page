import { getJobs } from "@/lib/jobs";
import { CleanCareersBoard } from "@/components/CleanCareersBoard";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const jobsResult = await getJobs({ pageSize: 50 });

  return <CleanCareersBoard initialJobs={jobsResult.jobs} />;
}
