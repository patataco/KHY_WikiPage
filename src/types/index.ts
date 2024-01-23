import { z } from 'zod';

import { type RouterInputs, type RouterOutputs } from '~/utils/api';

export const articleDetailSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const articlesTitleListSchema = z.array(z.object({ title: z.string() }));

export type Article = RouterOutputs['article']['getDetails'];
export type ArticlesTitleList = RouterOutputs['article']['getList'];
export type ArticlesTitleItem = ArticlesTitleList[number];
export type CreateArticlePayload = RouterInputs['article']['create'];
export type ModifyArticlePayload = RouterInputs['article']['update'];
export type DeleteArticlePayload = RouterInputs['article']['delete'];
