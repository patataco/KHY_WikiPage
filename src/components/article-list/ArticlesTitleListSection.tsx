import { useState } from 'react';

import PageNumberRange from '~/components/article-list/ArticlesPagination';
import ArticlesTitleList from '~/components/article-list/ArticlesTitleList';
import ArticlesTitleListHeader from '~/components/article-list/ArticlesTitleListHeader';
import { Pagination, PaginationContent } from '~/components/ui/pagination';
import { useArticles } from '~/hooks/useArticles';

const ITEMS_PER_PAGE = 5;
const ArticlesTitleListSection = () => {
  const { articleList } = useArticles();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articleList.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = articleList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex min-h-[728px] w-[400px] flex-col items-center gap-8 rounded-md border p-8 md:w-[640px]">
      <ArticlesTitleListHeader />
      <ArticlesTitleList articleList={currentItems} />
      {totalPages > 0 && (
        <Pagination>
          <PaginationContent>
            <PageNumberRange
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ArticlesTitleListSection;
