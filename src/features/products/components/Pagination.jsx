import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
    currentPage = 1,
    totalPages = 10,
    onPrevious,
    onNext,
    isLoading = false,
}) => {
    return (
        <div className="mt-10 pb-6 select-none flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
                onClick={onPrevious}
                disabled={currentPage === 0 || isLoading}
                className="flex items-center cursor-pointer gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
            >
                <ChevronLeft size={18} />
                Previous
            </button>

            {/* Page Indicator */}
            <div className="rounded-xl border border-indigo-100 bg-indigo-50 px-6 py-3 shadow-sm">
                <span className="text-sm font-semibold text-indigo-700">
                    Page {currentPage +1}
                </span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-sm text-gray-600">
                    {totalPages} Pages
                </span>
            </div>

            {/* Next Button */}
            <button
                onClick={onNext}
                disabled={currentPage === totalPages-1}
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
            >
                Next
                <ChevronRight size={18} />
            </button>
        </div>
    );
};

export default Pagination;