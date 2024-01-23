import { useModal } from '@ebay/nice-modal-react';

import { ArticleCreationModal } from '~/components/article/ArticleCreationModal';
import ServiceTitle from '~/components/article-list/ServiceTitle';
import { Button } from '~/components/ui/button';

const ArticlesTitleListHeader = () => {
  const createArticleModal = useModal(ArticleCreationModal);

  const handleAddButtonClick = async () => {
    await createArticleModal.show();
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <ServiceTitle title="WikiPage" />
      <Button className="h-8 w-12 self-end p-4" onClick={handleAddButtonClick}>
        추가
      </Button>
    </div>
  );
};

export default ArticlesTitleListHeader;
