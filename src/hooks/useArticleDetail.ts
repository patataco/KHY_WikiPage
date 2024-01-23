import { useQueryClient } from '@tanstack/react-query';

import { useUpdateArticleMutation } from '~/services/mutations/useUpdateArticleMutation';
import {
  ARTICLE_DETAIL_QUERY_KEY,
  useArticleDetailQuery,
} from '~/services/queries/useArticleDetailQuery';
import { type ModifyArticlePayload } from '~/types';

export const useArticleDetail = (id: string) => {
  const [article] = useArticleDetailQuery(id, { suspense: true });
  const modifyArticleMutation = useUpdateArticleMutation();
  const queryClient = useQueryClient();

  const modifyArticle = async (payload: ModifyArticlePayload) => {
    const response = await modifyArticleMutation.mutateAsync(payload, {
      onSettled: () => {
        const queryKey = ARTICLE_DETAIL_QUERY_KEY(payload.id);
        queryClient.invalidateQueries(queryKey).catch(console.error);
      },
    });
    return response;
  };

  return {
    article,
    modifyArticle,
  };
};
