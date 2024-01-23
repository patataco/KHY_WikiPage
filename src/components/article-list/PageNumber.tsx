import { PaginationItem, PaginationLink } from '~/components/ui/pagination';

interface PageNumberProps {
  currentPage: number;
  num: number;
  onClick: (pageNumber: number) => void;
}
const PageNumber = ({ currentPage, num, onClick }: PageNumberProps) => {
  return (
    <PaginationItem>
      <PaginationLink
        className="size-9"
        isActive={currentPage === num}
        onClick={() => onClick(num)}>
        {num}
      </PaginationLink>
    </PaginationItem>
  );
};

export default PageNumber;
