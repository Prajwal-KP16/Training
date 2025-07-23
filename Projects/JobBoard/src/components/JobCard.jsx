import React from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Building,
  Heart,
  Briefcase,
} from "lucide-react";

const JobCard = ({ job, onJobClick, onToggleSave, isSaved }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer p-6"
      onClick={() => onJobClick(job)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">{job.logo}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              {job.title}
            </h3>
            <p className="text-gray-600 flex items-center mt-1">
              <Building className="w-4 h-4 mr-1" />
              {job.company}
            </p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(job.id);
          }}
          className={`p-2 rounded-full transition-colors ${
            isSaved
              ? "text-red-500 bg-red-50"
              : "text-gray-400 hover:text-red-500 hover:bg-gray-50"
          }`}
        >
          <Heart className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          <MapPin className="w-3 h-3 mr-1" />
          {job.location}
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <Briefcase className="w-3 h-3 mr-1" />
          {job.type}
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
          <Users className="w-3 h-3 mr-1" />
          {job.level}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {job.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-green-600 font-semibold">
          <DollarSign className="w-4 h-4 mr-1" />
          {job.salary}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          {job.posted}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
