import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import { type ReactElement } from 'react';

import ArticleDetailSection from '~/components/article/ArticleDetailSection';
import { ArticleDetailGroup } from '~/components/common/Common';
import Loading from '~/components/common/Loading';
import { SSRSafeSuspense } from '~/components/common/SSRSafeSuspense';
import Layout from '~/components/layouts/Layout';

const ArticleDetailHome = () => {
  const router = useRouter();
  const id = String(router?.query?.id ?? '');

  if (!router.isReady) {
    return null;
  }
  if (!id) {
    redirect('/404');
  }
  return (
    <ArticleDetailGroup>
      <SSRSafeSuspense fallback={<Loading />}>
        <ArticleDetailSection id={id} />
      </SSRSafeSuspense>
    </ArticleDetailGroup>
  );
};

export default ArticleDetailHome;

ArticleDetailHome.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
