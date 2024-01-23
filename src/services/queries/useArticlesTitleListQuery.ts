import { getQueryKey } from '@trpc/react-query';

import { type ReactQueryOptions } from '~/services/types';
import { api } from '~/utils/api';

export const ARTICLES_LIST_QUERY_KEY = getQueryKey(
  api.article.getList,
  undefined,
  'query',
);

export const useArticlesTitleListQuery = (
  options?: ReactQueryOptions['article']['getList'],
) => {
  return api.article.getList.useSuspenseQuery(undefined, options);
};
