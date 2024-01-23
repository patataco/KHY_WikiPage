import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { type ChangeEvent, type FormEvent, useCallback, useState } from 'react';

import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogFooter } from '~/components/ui/dialog';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { useArticles } from '~/hooks/useArticles';

const _ArticleCreationModal = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { createArticle } = useArticles();
  const modal = useModal();

  const handleCancelClick = () => {
    modal.remove();
  };

  const handleAddClick = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!title.trim() || !content.trim()) {
        alert('제목과 본문을 모두 입력해주세요.');
        return;
      }
      await createArticle({ title, content });
      setTitle('');
      setContent('');
      modal.remove();
    },
    [createArticle, content, title],
  );

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      modal.remove();
    }
  };

  return (
    <Dialog open={modal.visible} onOpenChange={handleOpenChange}>
      <DialogContent>
        <form className="flex flex-col gap-4 py-6" onSubmit={handleAddClick}>
          <div className="flex flex-col gap-1">
            <div>
              <Input
                placeholder="제목을 입력하세요."
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
                value={title}
              />
            </div>
            <Textarea
              className="min-h-[220px] resize-none"
              placeholder="본문을 입력하세요."
              value={content}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.target.value)
              }
            />
          </div>
          <DialogFooter className="gap-2">
            <Button className="size-10 px-6" onClick={handleCancelClick}>
              취소
            </Button>
            <Button className="size-10 px-6" type="submit">
              등록
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const ArticleCreationModal = NiceModal.create(_ArticleCreationModal);
