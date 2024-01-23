import { type ReactElement } from 'react';

import ArticlesTitleListSection from '~/components/article-list/ArticlesTitleListSection';
import { ArticlesTitleListGroup } from '~/components/common/Common';
import Loading from '~/components/common/Loading';
import { SSRSafeSuspense } from '~/components/common/SSRSafeSuspense';
import Layout from '~/components/layouts/Layout';

export default function Home() {
  return (
    <ArticlesTitleListGroup>
      <SSRSafeSuspense fallback={<Loading />}>
        <ArticlesTitleListSection />
      </SSRSafeSuspense>
    </ArticlesTitleListGroup>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
