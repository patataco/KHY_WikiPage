import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const articleRouter = createTRPCRouter({
  getList: publicProcedure.query(({ ctx }) => {
    return ctx.db.article.findMany({
      select: {
        title: true,
        id: true,
        content: false,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: [
        {
          updatedAt: 'desc',
        },
      ],
    });
  }),

  getDetails: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.article.findUniqueOrThrow({
        where: { id: input.id },
      });
    }),

  create: publicProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.article.create({
        data: { content: input.content, title: input.title },
      });
    }),

  update: publicProcedure
    .input(z.object({ id: z.string(), content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.article.update({
        where: { id: input.id },
        data: {
          content: input.content,
        },
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.article.delete({
        where: { id: input.id },
      });
    }),
});

export type ArticleRouter = typeof articleRouter;
