import { type ArticlesTitleItem, type ArticlesTitleList } from '~/types';

export const normalizeArticleListByTitle = (articles: ArticlesTitleList) => {
  return articles.reduce<Record<string, ArticlesTitleItem>>((acc, cur) => {
    acc[cur.title] = cur;
    return acc;
  }, {});
};
