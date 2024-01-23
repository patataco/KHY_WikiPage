import { useQueryClient } from '@tanstack/react-query';

import { useCreateArticleMutation } from '~/services/mutations/useCreateArticleMutation';
import { useDeleteArticleMutation } from '~/services/mutations/useDeleteArticleMutation';
import {
  ARTICLES_LIST_QUERY_KEY,
  useArticlesTitleListQuery,
} from '~/services/queries/useArticlesTitleListQuery';
import { type CreateArticlePayload, type DeleteArticlePayload } from '~/types';

export const useArticles = () => {
  const [articleList] = useArticlesTitleListQuery({ suspense: true });
  const createMutation = useCreateArticleMutation();
  const deleteArticleMutation = useDeleteArticleMutation();
  const queryClient = useQueryClient();

  const createArticle = async (payload: CreateArticlePayload) => {
    const response = await createMutation.mutateAsync(payload, {
      onSettled: () => {
        queryClient
          .invalidateQueries(ARTICLES_LIST_QUERY_KEY)
          .catch(console.error);
      },
    });
    return response;
  };

  const deleteArticle = async (payload: DeleteArticlePayload) => {
    const response = await deleteArticleMutation.mutateAsync(payload, {
      onSettled: () => {
        queryClient
          .invalidateQueries(ARTICLES_LIST_QUERY_KEY)
          .catch(console.error);
      },
    });
    return response;
  };

  return { articleList, createArticle, deleteArticle };
};
