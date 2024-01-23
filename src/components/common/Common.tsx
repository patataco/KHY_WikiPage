import type { PropsWithChildren } from 'react';

export const ArticleDetailGroup = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col items-center p-4">{children}</div>;
};

export const ArticlesTitleListGroup = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col items-center gap-8 p-4">{children}</div>;
};
