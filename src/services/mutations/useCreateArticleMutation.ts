import { api } from '~/utils/api';

type Params = Parameters<typeof api.article.create.useMutation>;
export const useCreateArticleMutation = (...params: Params) => {
  return api.article.create.useMutation(...params);
};
