const Pagination = ({ currentPage, totalPages, paginate }: { currentPage: number; totalPages: number; paginate: (pageNumber: number) => void }) => {
    return (
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-sm text-gray-600 dark:text-white rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <div className="text-sm text-gray-600 dark:text-white">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-sm text-gray-600 dark:text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    );
  };

export default Pagination;
