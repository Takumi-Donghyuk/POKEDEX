import { IconArrowLeft, IconCaretLeft } from "@tabler/icons-react";
import { IconCaretRight } from "@tabler/icons-react";
import { IconArrowRight } from "@tabler/icons-react";

const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  const handleLastPage = () => {
    setCurrentPage(lastPage);
  };
  const handleFirstPage = () => {
    setCurrentPage(1);
  };
  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviusPage = () => {
    const priviusPage = currentPage - 1;
    if (priviusPage > 0) {
      setCurrentPage(priviusPage);
    }
  };
  return (
    <ul className="pb-4 text-lg flex gap-2 justify-center font-bold flex-wrap">
      <li>
        <button
          onClick={handleFirstPage}
          className="p-2 rounded-md hover:bg-blue-900 hover:text-white transition-colors bg-blue-500"
        >
          <IconCaretLeft />
        </button>
      </li>
      <li>
        <button
          onClick={handlePreviusPage}
          className="p-2 rounded-md hover:bg-blue-900 hover:text-white transition-colors bg-blue-500"
        >
          <IconArrowLeft />
        </button>
      </li>
      {pagesInCurrentBlock.map((page) => (
        <li key={page}>
          <button
            onClick={() => setCurrentPage(page)}
            className={`p-3 px-5 rounded-[50%] bg-red-500 text-white hover:bg-red-950 hover:text-white transition-colors text-black${
              page === currentPage ? "bg-red-500 text-white active:bg-red-500 active:text-white" : "bg-red-950 text-white"
            }`}
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={handleNextPage}
          className="p-2 rounded-md hover:bg-blue-900 hover:text-white transition-colors bg-blue-500"
        >
          <IconArrowRight />
        </button>
      </li>
      <li>
        <button
          onClick={handleLastPage}
          className="p-2 rounded-md hover:bg-blue-900 hover:text-white transition-colors bg-blue-500"
        >
          <IconCaretRight />
        </button>
      </li>
    </ul>
  );
};
export default Pagination;
