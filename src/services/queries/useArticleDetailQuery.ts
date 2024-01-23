import { type QueryKey } from '@tanstack/query-core';
import { getQueryKey } from '@trpc/react-query';

import { type ReactQueryOptions } from '~/services/types';
import { api } from '~/utils/api';

export const ARTICLE_DETAIL_QUERY_KEY = (id: string): QueryKey => {
  return getQueryKey(api.article.getDetails, { id: id }, 'query');
};

export const useArticleDetailQuery = (
  id: string,
  options?: ReactQueryOptions['article']['getDetails'],
) => {
  return api.article.getDetails.useSuspenseQuery({ id: id }, options);
};
