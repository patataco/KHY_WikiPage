import { api } from '~/utils/api';

type Params = Parameters<typeof api.article.update.useMutation>;

export const useUpdateArticleMutation = (...params: Params) => {
  return api.article.update.useMutation(...params);
};
