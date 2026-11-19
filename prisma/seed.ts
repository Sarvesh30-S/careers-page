import "dotenv/config";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Prisma } from "../src/generated/prisma";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const jobs: Prisma.JobCreateInput[] = [
  {
    title: "Lead Creative Strategist (Influencer Marketing)",
    company: "The Bored Monkey",
    companyWebsite: "https://theboredmonkey.com",
    location: "Mumbai (Hybrid)",
    type: "FULL_TIME",
    category: "Marketing",
    experienceLevel: "SENIOR",
    remote: false,
    salaryMin: 1200000,
    salaryMax: 1800000,
    currency: "INR",
    featured: true,
    description:
      "We are looking for a Lead Creative Strategist who breathes internet culture and understands how to craft high-converting influencer campaigns. You will own campaign creative direction, match top brands with ideal creators, and architect narratives that generate millions of organic impressions.",
    requirements: [
      "4+ years of creative strategy or campaign planning at a top agency or creator network",
      "Proven track record orchestrating 50M+ view influencer campaigns",
      "Deep understanding of Instagram Reels, YouTube Shorts, and cultural zeitgeist",
      "Exceptional client communication and pitch presentation craft",
    ],
    benefits: [
      "Competitive compensation & performance bonuses",
      "State-of-the-art studio access in Mumbai",
      "Flexible hybrid model (3 days in studio, 2 days remote)",
      "Comprehensive medical insurance",
      "Creator events and brand summit passes",
    ],
    tags: ["Influencer Marketing", "Creative Strategy", "Reels", "Brand Storytelling"],
    applyEmail: "careers@theboredmonkey.com",
  },
  {
    title: "Senior Video Editor & Reel Storyteller",
    company: "The Bored Monkey",
    companyWebsite: "https://theboredmonkey.com",
    location: "Mumbai (Studio HQ)",
    type: "FULL_TIME",
    category: "Design",
    experienceLevel: "MID",
    remote: false,
    salaryMin: 900000,
    salaryMax: 1500000,
    currency: "INR",
    featured: true,
    description:
      "Join our in-house production studio to edit punchy, high-octane vertical videos, commercial brand spots, and creator documentaries. You obsess over pacing, sound design, hook retention, and color grading that commands attention in the first 0.8 seconds.",
    requirements: [
      "3+ years experience editing high-performing short-form video content",
      "Mastery of Adobe Premiere Pro, After Effects, and DaVinci Resolve",
      "Intuitive grasp of sound effects, music selection, and rhythmic cutting",
      "Portfolio of reels/shorts with verified viral engagement metrics",
    ],
    benefits: [
      "Top-tier Mac Studio / dual-display editing suite",
      "Flexible creative hours",
      "Health insurance & wellness stipends",
      "Unlimited studio coffee and snacks",
    ],
    tags: ["Premiere Pro", "After Effects", "Sound Design", "Vertical Video", "Reels"],
    applyEmail: "careers@theboredmonkey.com",
  },
  {
    title: "Creator Partnerships & Talent Manager",
    company: "The Bored Monkey",
    companyWebsite: "https://theboredmonkey.com",
    location: "Mumbai (Hybrid)",
    type: "FULL_TIME",
    category: "Marketing",
    experienceLevel: "MID",
    remote: false,
    salaryMin: 800000,
    salaryMax: 1300000,
    currency: "INR",
    featured: true,
    description:
      "You will be the bridge between The Bored Monkey, our brand partners, and India's top creators. From scouting upcoming talent and managing contract negotiations to coordinating shoot schedules, you ensure seamless campaign delivery with creator-first empathy.",
    requirements: [
      "2-4 years managing creator relations, influencer rosters, or celebrity partnerships",
      "Extensive personal relationships with digital creators and talent agencies",
      "Fierce negotiation skills with a deep understanding of creator commercial deliverables",
      "High attention to detail and ability to juggle multiple campaigns simultaneously",
    ],
    benefits: [
      "Direct exposure to Tier-1 brands and top internet talent",
      "Incentive bonuses on completed campaigns",
      "Hybrid work flexibility",
      "Comprehensive medical coverage",
    ],
    tags: ["Talent Management", "Creator Relations", "Brand Partnerships", "Negotiations"],
    applyEmail: "careers@theboredmonkey.com",
  },
  {
    title: "Motion Graphics & 3D Visual Artist",
    company: "The Bored Monkey",
    companyWebsite: "https://theboredmonkey.com",
    location: "Remote / Mumbai",
    type: "FULL_TIME",
    category: "Design",
    experienceLevel: "MID",
    remote: true,
    salaryMin: 850000,
    salaryMax: 1400000,
    currency: "INR",
    featured: false,
    description:
      "Transform flat concepts into stunning 3D animations, kinetic typography, kinetic logos, and mixed-media visuals for our brand campaigns. You bridge the gap between graphic design, 3D modeling, and motion choreography.",
    requirements: [
      "Strong portfolio in 3D motion design (Blender, Cinema 4D, or Maya + After Effects)",
      "Kinetic typography excellence and fluid visual transitions",
      "Experience with visual effects (VFX) compositing for commercial video",
      "Self-directed worker capable of thriving in a fast-paced creative studio",
    ],
    benefits: [
      "Remote-first options with workstation hardware allowance",
      "Software license subsidies (Cinema 4D, Octane/Redshift, Adobe CC)",
      "Performance incentives",
      "Generous paid time off",
    ],
    tags: ["3D Animation", "Blender", "After Effects", "Kinetic Typography", "Motion Design"],
    applyEmail: "careers@theboredmonkey.com",
  },
  {
    title: "Performance Marketing & Growth Lead",
    company: "The Bored Monkey",
    companyWebsite: "https://theboredmonkey.com",
    location: "Mumbai (Hybrid)",
    type: "FULL_TIME",
    category: "Marketing",
    experienceLevel: "SENIOR",
    remote: false,
    salaryMin: 1100000,
    salaryMax: 1700000,
    currency: "INR",
    featured: false,
    description:
      "Supercharge our creator content with paid amplification. You will manage meta ad spends, whitelisted creator ads, TikTok/YouTube spark ads, and track funnel conversion metrics to prove tangible ROI for our enterprise clients.",
    requirements: [
      "4+ years managing paid social ad budgets (Meta Ads Manager, Google Ads)",
      "Experience with creator licensing / whitelisted ads amplification",
      "Strong analytical skills with GA4, attribution modeling, and ROAS optimization",
      "Experience testing creative variants at scale",
    ],
    benefits: [
      "Lucrative performance-linked bonuses",
      "Hybrid setup",
      "Health & wellness benefits",
      "Annual team offsites",
    ],
    tags: ["Performance Marketing", "Meta Ads", "Whitelisting", "Paid Media", "Analytics"],
    applyEmail: "careers@theboredmonkey.com",
  },
  {
    title: "Full Stack Creative Technologist",
    company: "The Bored Monkey",
    companyWebsite: "https://theboredmonkey.com",
    location: "Remote",
    type: "FULL_TIME",
    category: "Engineering",
    experienceLevel: "MID",
    remote: true,
    salaryMin: 1000000,
    salaryMax: 1600000,
    currency: "INR",
    featured: true,
    description:
      "Build immersive interactive web experiences, 3D landing pages, micro-sites, and internal creator intelligence tools. You love combining modern web frameworks (Next.js, Three.js, WebGL) with slick micro-interactions and creative flair.",
    requirements: [
      "3+ years experience with React, Next.js, and TypeScript",
      "Hands-on experience with Three.js / WebGL / GSAP / Framer Motion",
      "Strong understanding of responsive layouts, Core Web Vitals, and GPU performance",
      "A passion for creative web development and Awwwards-level craft",
    ],
    benefits: [
      "100% remote flexibility",
      "Home office hardware stipend",
      "Unlimited learning budget for web design courses and conferences",
      "Flexible working hours",
    ],
    tags: ["Next.js", "Three.js", "TypeScript", "WebGL", "Creative Development"],
    applyEmail: "careers@theboredmonkey.com",
  },
  {
    title: "Associate Brand Account Executive",
    company: "The Bored Monkey",
    companyWebsite: "https://theboredmonkey.com",
    location: "Mumbai (Studio HQ)",
    type: "FULL_TIME",
    category: "Product",
    experienceLevel: "ENTRY",
    remote: false,
    salaryMin: 600000,
    salaryMax: 900000,
    currency: "INR",
    featured: false,
    description:
      "Be the day-to-day client champion for leading consumer brands. You will coordinate between clients and internal creative teams, manage project timelines, write clear briefs, and ensure deliverables exceed expectations.",
    requirements: [
      "1-2 years experience in account management or client servicing at a digital agency",
      "Outstanding written and verbal English communication",
      "Meticulous organizational skills and calm problem-solving attitude",
      "Passion for social media and advertising",
    ],
    benefits: [
      "Rapid career progression to Senior Account Lead",
      "Mentorship from experienced agency directors",
      "Medical insurance",
      "Studio perks & team dinners",
    ],
    tags: ["Account Management", "Client Servicing", "Project Management", "Briefing"],
    applyEmail: "careers@theboredmonkey.com",
  },
  {
    title: "Content & Viral Trends Intern",
    company: "The Bored Monkey",
    companyWebsite: "https://theboredmonkey.com",
    location: "Mumbai (Studio HQ)",
    type: "INTERNSHIP",
    category: "Marketing",
    experienceLevel: "ENTRY",
    remote: false,
    salaryMin: 25000,
    salaryMax: 40000,
    currency: "INR",
    featured: false,
    description:
      "Spend your days scrolling with purpose! You will monitor emerging audio trends, memes, creator formats, and cultural moments across Instagram, TikTok, and YouTube, feeding live daily insights directly to our creative director and strategists.",
    requirements: [
      "Active social media native with a proven passion for internet culture",
      "Great copywriting flair and humor",
      "Curious, hungry to learn, and comfortable pitching ideas in war rooms",
      "Available full-time in Mumbai for a 6-month period with PPO opportunity",
    ],
    benefits: [
      "Substantial monthly stipend",
      "High probability of Pre-Placement Offer (PPO)",
      "Daily studio lunch & coffee",
      "Hands-on mentorship from industry leaders",
    ],
    tags: ["Internship", "Trend Spotting", "Memes", "Reels Research", "Content Creation"],
    applyEmail: "careers@theboredmonkey.com",
  },
];

async function main() {
  console.log("🌱 Seeding The Bored Monkey database...");

  // Preserve existing candidate applications; delete only existing demo jobs
  await prisma.job.deleteMany();

  for (const job of jobs) {
    await prisma.job.create({ data: job });
  }
  console.log(`✅ Seeded ${jobs.length} The Bored Monkey jobs successfully!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
