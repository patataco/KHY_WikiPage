import { type inferReactQueryProcedureOptions } from '@trpc/react-query';

import { type AppRouter } from '~/server/api/root';

export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;
