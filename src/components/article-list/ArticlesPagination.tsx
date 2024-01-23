import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { type Dispatch, type SetStateAction, useState } from 'react';

import PageNumber from '~/components/article-list/PageNumber';
import { Button } from '~/components/ui/button';
import { PaginationItem } from '~/components/ui/pagination';

interface PageNumberRangeProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
const PageNumberRange = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PageNumberRangeProps) => {
  const [minPageNumLimit, setMinPageNumLimit] = useState(0);
  const [maxPageNumLimit, setMaxPageNumLimit] = useState(5);

  const handlePageNumClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).filter(
      (page) =>
        page > minPageNumLimit && page <= Math.min(maxPageNumLimit, totalPages),
    );
  };
  const handlePrevButtonClick = () => {
    currentPage > 1 && setCurrentPage((prev) => prev - 1);
    if (minPageNumLimit > 0 && currentPage === minPageNumLimit + 1) {
      setMinPageNumLimit((prev) => prev - 1);
      setMaxPageNumLimit((prev) => prev - 1);
    }
  };

  const handleNextButtonClick = () => {
    totalPages > currentPage && setCurrentPage((prev) => prev + 1);
    if (totalPages > maxPageNumLimit && currentPage === maxPageNumLimit) {
      setMinPageNumLimit((prev) => prev + 1);
      setMaxPageNumLimit((prev) => prev + 1);
    }
  };

  return (
    <>
      <PaginationItem>
        <Button
          className="size-8 p-2"
          onClick={handlePrevButtonClick}
          disabled={currentPage === 1}>
          <ChevronLeft className="size-4" />
        </Button>
      </PaginationItem>
      {renderPageNumbers().map((num) => {
        return (
          <PageNumber
            key={num}
            currentPage={currentPage}
            num={num}
            onClick={() => handlePageNumClick(num)}
          />
        );
      })}
      <PaginationItem>
        <Button
          className="size-8 p-2"
          onClick={handleNextButtonClick}
          disabled={currentPage === totalPages}>
          <ChevronRight className="size-4" />
        </Button>
      </PaginationItem>
    </>
  );
};
export default PageNumberRange;
