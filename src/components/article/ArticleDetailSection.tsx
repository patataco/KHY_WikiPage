import { useModal } from '@ebay/nice-modal-react';
import linkifyRegisterKeywords from 'linkify-plugin-keyword';
import Linkify from 'linkify-react';
import Link from 'next/link';
import { type ComponentProps, useMemo } from 'react';

import { ArticleModifyModal } from '~/components/article/ArticleModifyModal';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { useArticleDetail } from '~/hooks/useArticleDetail';
import { useArticles } from '~/hooks/useArticles';
import { getDate } from '~/utils/date';
import { normalizeArticleListByTitle } from '~/utils/normalizeArticle';

type LinkifyOptions = ComponentProps<typeof Linkify>['options'];
interface ArticleDetailPageProps {
  id: string;
}
const ArticleDetailSection = ({ id }: ArticleDetailPageProps) => {
  const { article } = useArticleDetail(id);
  const { articleList } = useArticles();
  const { updatedAt, title, content } = article;
  const modifyModal = useModal(ArticleModifyModal);

  const updatedDate = useMemo(() => {
    return getDate(updatedAt);
  }, [updatedAt]);

  const normalizedArticles = useMemo(() => {
    const filteredArticleList = articleList.filter((item) => item.id !== id);
    return normalizeArticleListByTitle(filteredArticleList);
  }, [articleList, id]);

  const titleKeywords = useMemo(
    () => Object.keys(normalizedArticles),
    [normalizedArticles],
  );

  linkifyRegisterKeywords(titleKeywords);

  const options: LinkifyOptions = {
    formatHref: {
      keyword: (keyword) => {
        const item = normalizedArticles[keyword];
        if (!item) {
          return '#';
        }
        return `/article/${item.id}`;
      },
    },
    render: ({ attributes, content }) => {
      const href = String(attributes?.href ?? '#');
      return (
        <Link href={href} className="text-blue-400">
          {content}
        </Link>
      );
    },
  };
  const handleEditModeButtonClick = async () => {
    await modifyModal.show({ item: article });
  };

  return (
    <Card className="flex min-h-[728px] w-[400px] flex-col items-center gap-8 rounded-md border md:w-[640px]">
      <CardHeader className="w-full flex-row items-center justify-between border-b">
        <div className="flex flex-col gap-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{updatedDate}</CardDescription>
        </div>
        <div>
          <Button className="h-8 p-4" onClick={handleEditModeButtonClick}>
            수정
          </Button>
        </div>
      </CardHeader>
      <CardContent className="w-full flex-1">
        <Linkify as="p" options={options}>
          {content}
        </Linkify>
      </CardContent>
    </Card>
  );
};

export default ArticleDetailSection;
