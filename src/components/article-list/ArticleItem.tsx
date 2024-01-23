import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Button } from '~/components/ui/button';
import { useArticles } from '~/hooks/useArticles';
import { type ArticlesTitleItem } from '~/types';
import { getDate } from '~/utils/date';

type ArticleItemProps = {
  item: ArticlesTitleItem;
};
const ArticleItem = ({ item }: ArticleItemProps) => {
  const router = useRouter();
  const { id, title, updatedAt } = item;
  const { deleteArticle } = useArticles();
  const updatedDate = useMemo(() => {
    return getDate(updatedAt);
  }, [updatedAt]);
  const handleTitleClick = async () => {
    await router.push(`/article/${id}`);
  };
  const handleDeleteButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.stopPropagation();
    await deleteArticle({ id });
  };

  return (
    <div
      className="flex w-full items-center justify-between rounded-md border p-4 transition duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-md"
      onClick={handleTitleClick}>
      <div className="flex w-full max-w-[240px] flex-col md:max-w-[480px]">
        <div className="w-full truncate text-lg">{title}</div>
        <div className="w-full max-w-[180px] truncate text-xs text-muted-foreground md:max-w-[480px]">
          {updatedDate}
        </div>
      </div>
      <Button
        className="size-5 shrink-0 rounded-full bg-white px-2 py-6 text-gray-500 opacity-0 hover:bg-white hover:opacity-100 md:size-8 md:text-lg"
        onClick={handleDeleteButtonClick}>
        X
      </Button>
    </div>
  );
};
export default ArticleItem;
