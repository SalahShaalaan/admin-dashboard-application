export default function InboxFooter({ currentPage, totalPages, onPageChange, totalEmails, emailsPerPage }) {

  const handlePrevPage = () => onPageChange(Math.max(currentPage - 1, 1));
  const handleNextPage = () => onPageChange(Math.min(currentPage + 1, totalPages));

  const startIndex = (currentPage - 1) * emailsPerPage + 1;
  const endIndex = Math.min(startIndex + emailsPerPage - 1, totalEmails);

  return (
    <div className="flex justify-between items-center mt-4 px-4 py-2 text-sm">
      <span>Showing {startIndex}-{endIndex} of {totalEmails}</span>
      <div className="flex items-center space-x-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`p-1 rounded ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`p-1 rounded ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 dark:text-gray-50 hover:bg-slate-300 dark:hover:bg-slate-500'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}