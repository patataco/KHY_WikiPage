import ArticleItem from '~/components/article-list/ArticleItem';
import { type ArticlesTitleList } from '~/types';

const ArticleTitleList = ({
  articleList,
}: {
  articleList: ArticlesTitleList;
}) => {
  if (articleList.length === 0)
    return (
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        게시글이 없습니다.
      </div>
    );
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-2 px-2 py-6">
      {articleList.map((item) => {
        return <ArticleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ArticleTitleList;
