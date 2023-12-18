import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, totalPages, handlerPageChange } = useContext(AppContext);
  return (
    <div className="fixed flex justify-center item-center bottom-0 bg-white py-2 border-t-2 border-t-gray-300 w-full inset-x-0">
      <div className="flex justify-between gap-x-3 items-center w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            className="rounded-md border-gray-300 border-2 px-4 py-1"
            onClick={() => handlerPageChange(page - 1)}
          >
            Previous
          </button>
        )}
        {/* last page pe nahi dikhana hai next button isliye braces me hai buttons */}
        {page < totalPages && (
          <button
            className="rounded-md border-gray-300 border-2 px-4 py-1"
            onClick={() => handlerPageChange(page + 1)}
          >
            Next
          </button>
        )}
        <p className="text-sm font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;