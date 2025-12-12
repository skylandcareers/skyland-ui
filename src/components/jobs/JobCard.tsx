import Link from 'next/link';
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaArrowRight } from 'react-icons/fa';

// Simplified Job Interface for the card
interface JobCardProps {
    job: {
        _id: string;
        title: string;
        country: string;
        location: string;
        type: string;
        salaryRange?: string;
        createdAt: string;
    };
}

export default function JobCard({ job }: JobCardProps) {
    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
            <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                    <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        {job.country}
                    </div>
                    <span className="text-xs text-gray-400">
                        {new Date(job.createdAt).toLocaleDateString()}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {job.title}
                </h3>

                <div className="space-y-2 mt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaMapMarkerAlt className="text-gray-400 shrink-0" />
                        <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaBriefcase className="text-gray-400 shrink-0" />
                        <span>{job.type}</span>
                    </div>
                    {job.salaryRange && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                            <FaMoneyBillWave className="text-green-500 shrink-0" />
                            <span>{job.salaryRange}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100">
                <Link
                    href={`/jobs/${job._id}`}
                    className="flex justify-between items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors w-full group/btn"
                >
                    View Details
                    <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
