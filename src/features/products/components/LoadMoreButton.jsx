import React from "react";
import { LoaderCircle } from "lucide-react";

const LoadMoreButton = ({ onClick, isLoading = false}) => {

  return (
    <div className=" pt-6 py-4 w-full flex items-center justify-center">

    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className="
        inline-flex items-center justify-center gap-2
        rounded-xl
        cursor-pointer
        border border-gray-200
        bg-white
        px-6 py-3
        text-sm font-semibold text-gray-800
        shadow-sm
        transition-all duration-200
        hover:-translate-y-0.5
        hover:border-gray-300
        hover:shadow-md
        disabled:cursor-not-allowed
        disabled:opacity-60
        disabled:hover:translate-y-0
      "
    >
      {isLoading ? (
        <>
          <LoaderCircle className="h-5 w-5 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        <span>Load More</span>
      )}
    </button>
    </div>

  );
};

export default LoadMoreButton;