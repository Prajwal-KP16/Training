import React, { useState, useEffect } from "react";
import Header from "./Header";
import SearchFilters from "./SearchFilters";
import JobCard from "./JobCard";
import JobModal from "./JobModal";
import Footer from "./Footer";
import { mockJobs } from "../data/mockJobs";
import { useJobFilters } from "../hooks/useJobFilters";

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);

  const {
    filteredJobs,
    searchTerm,
    setSearchTerm,
    locationFilter,
    setLocationFilter,
    // ... other filter states
  } = useJobFilters(jobs);

  useEffect(() => {
    setJobs(mockJobs);
  }, []);

  const toggleSaveJob = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header savedJobsCount={savedJobs.length} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Dream Job
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover opportunities from top companies and take the next step in
            your career
          </p>
        </div>

        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          // ... other filter props
        />

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            {filteredJobs.length} jobs found
          </h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onJobClick={setSelectedJob}
              onToggleSave={toggleSaveJob}
              isSaved={savedJobs.includes(job.id)}
            />
          ))}
        </div>

        {selectedJob && (
          <JobModal
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
            onToggleSave={toggleSaveJob}
            isSaved={savedJobs.includes(selectedJob.id)}
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default JobBoard;
