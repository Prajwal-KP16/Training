import { useState, useEffect } from "react";

export const useJobFilters = (jobs) => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation =
        !locationFilter ||
        job.location.toLowerCase().includes(locationFilter.toLowerCase());
      const matchesType = !typeFilter || job.type === typeFilter;
      const matchesLevel = !levelFilter || job.level === levelFilter;

      return matchesSearch && matchesLocation && matchesType && matchesLevel;
    });

    setFilteredJobs(filtered);
  }, [searchTerm, locationFilter, typeFilter, levelFilter, jobs]);

  return {
    filteredJobs,
    searchTerm,
    setSearchTerm,
    locationFilter,
    setLocationFilter,
    typeFilter,
    setTypeFilter,
    levelFilter,
    setLevelFilter,
  };
};
