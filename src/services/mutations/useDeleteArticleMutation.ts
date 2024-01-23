import { api } from '~/utils/api';

type Params = Parameters<typeof api.article.delete.useMutation>;
export const useDeleteArticleMutation = (...params: Params) => {
  return api.article.delete.useMutation(...params);
};
