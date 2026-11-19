"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Job } from "@/generated/prisma";
import { TiltCard } from "@/components/ui/TiltCard";
import { ScrollBuild } from "@/components/ui/ScrollBuild";
import { formatSalary } from "@/lib/format";
import { jobTypeLabel } from "@/lib/constants";
import {
  Search,
  MapPin,
  Briefcase,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  Layers,
} from "lucide-react";

interface CareersSectionProps {
  initialJobs: Job[];
}

export function CareersSection({ initialJobs }: CareersSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    initialJobs.forEach((j) => set.add(j.category));
    return ["All", ...Array.from(set)];
  }, [initialJobs]);

  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const matchesSearch =
        searchTerm.trim() === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || job.category === selectedCategory;

      const matchesLocation =
        selectedLocation === "All" ||
        (selectedLocation === "Remote" && job.remote) ||
        (selectedLocation === "Mumbai" && job.location.includes("Mumbai"));

      const matchesType =
        selectedType === "All" || job.type === selectedType;

      return matchesSearch && matchesCategory && matchesLocation && matchesType;
    });
  }, [initialJobs, searchTerm, selectedCategory, selectedLocation, selectedType]);

  return (
    <section id="open-roles" className="relative py-28 sm:py-36 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Build */}
        <ScrollBuild direction="up" depth={90}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#171717] border border-[#FFD43B]/80 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>Chapter 04 · Career Opportunities</span>
            </div>

            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#171717]">
              Your Next Big Idea{" "}
              <span className="relative inline-block text-amber-600">
                Starts Here.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-white/60 inline-block">
              Join our Mumbai creative studio or collaborate from anywhere.
              Filter by your specialty, review the requirements, and apply directly.
            </p>
          </div>
        </ScrollBuild>

        {/* Filter Controls Bar with Scroll Build */}
        <ScrollBuild direction="scale" depth={80} className="mt-12">
          <div className="rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 p-4 sm:p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Search Input */}
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by role, keyword, or skill (e.g. Video, 3D)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-[#171717] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FFD43B] focus:border-[#FFD43B] transition-all shadow-xs"
                />
              </div>

              {/* Department Filter */}
              <div className="md:col-span-3">
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#FFD43B] focus:border-[#FFD43B] cursor-pointer appearance-none shadow-xs"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        Department: {c}
                      </option>
                    ))}
                  </select>
                  <Layers className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Location Filter */}
              <div className="md:col-span-2">
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#FFD43B] focus:border-[#FFD43B] cursor-pointer appearance-none shadow-xs"
                  >
                    <option value="All">All Locations</option>
                    <option value="Mumbai">Mumbai HQ</option>
                    <option value="Remote">Remote</option>
                  </select>
                  <MapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Employment Type Filter */}
              <div className="md:col-span-2">
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#FFD43B] focus:border-[#FFD43B] cursor-pointer appearance-none shadow-xs"
                  >
                    <option value="All">All Types</option>
                    <option value="FULL_TIME">Full-time</option>
                    <option value="INTERNSHIP">Internship</option>
                    <option value="CONTRACT">Contract</option>
                  </select>
                  <Briefcase className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Quick Stats & Active Filter Count */}
            <div className="mt-4 pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between text-xs text-slate-500 font-medium">
              <span>
                Showing <strong className="text-[#171717]">{filteredJobs.length}</strong> of {initialJobs.length} openings
              </span>
              {(searchTerm || selectedCategory !== "All" || selectedLocation !== "All" || selectedType !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setSelectedLocation("All");
                    setSelectedType("All");
                  }}
                  className="text-amber-700 font-bold hover:underline cursor-pointer"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </ScrollBuild>

        {/* 3D Tilt Job Cards Grid with Scroll Assembly */}
        {filteredJobs.length > 0 ? (
          <ScrollBuild direction="up" depth={120} stagger className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => {
                const salary = formatSalary(job.salaryMin, job.salaryMax, job.currency);

                return (
                  <TiltCard key={job.id} className="h-full">
                    <div className="relative h-full flex flex-col justify-between p-7 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md hover:border-[#FFD43B] hover:shadow-2xl hover:bg-white transition-all duration-300 group">
                      {/* Top Row: Department & Featured */}
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFF9E8] text-[#171717] border border-[#FFD43B]/60 shadow-xs">
                            {job.category}
                          </span>
                          {job.featured && (
                            <span className="text-[11px] font-black uppercase tracking-wider bg-[#FFD43B] text-[#171717] px-2.5 py-0.5 rounded-full shadow-xs">
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Job Title */}
                        <h3 className="mt-4 text-xl font-black text-[#171717] group-hover:text-amber-600 transition-colors line-clamp-2">
                          <Link href={`/jobs/${job.id}`}>
                            {job.title}
                          </Link>
                        </h3>

                        {/* Location & Work Mode */}
                        <div className="mt-2.5 flex items-center gap-3 text-xs font-semibold text-slate-600">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-slate-400" />
                            {job.location}
                          </span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1">
                            <Briefcase className="h-3.5 w-3.5 text-slate-400" />
                            {jobTypeLabel(job.type)}
                          </span>
                        </div>

                        {/* Description excerpt */}
                        <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                          {job.description}
                        </p>

                        {/* Tags */}
                        {job.tags.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {job.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-md bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 border border-slate-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Bottom Row: Salary & Apply Button */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase font-bold text-slate-400">
                            Compensation
                          </div>
                          <div className="text-sm font-black text-[#171717]">
                            {salary || "Competitive"}
                          </div>
                        </div>

                        <Link
                          href={`/jobs/${job.id}`}
                          className="btn-primary text-xs px-4 py-2 group/btn flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </ScrollBuild>
        ) : (
          <div className="mt-12 p-12 text-center rounded-2xl bg-white/80 backdrop-blur-md border border-dashed border-slate-300 shadow-md">
            <SlidersHorizontal className="h-8 w-8 text-slate-400 mx-auto" />
            <h3 className="mt-3 text-lg font-bold text-[#171717]">No openings match your filter</h3>
            <p className="mt-1 text-sm text-slate-500">
              Try adjusting your search keyword or clearing the filters above.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedLocation("All");
                setSelectedType("All");
              }}
              className="mt-4 btn-secondary text-xs px-4 py-2 cursor-pointer shadow-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
