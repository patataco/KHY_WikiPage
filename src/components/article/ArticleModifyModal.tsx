import NiceModal, { useModal } from '@ebay/nice-modal-react';
import {
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
  useCallback,
  useState,
} from 'react';

import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogFooter } from '~/components/ui/dialog';
import { Textarea } from '~/components/ui/textarea';
import { useArticleDetail } from '~/hooks/useArticleDetail';
import { type Article } from '~/types';

type ArticleModifyModalProps = { item: Article };
const _ArticleModifyModal = ({ item }: ArticleModifyModalProps) => {
  const modal = useModal();
  const { title, content, id } = item;
  const { modifyArticle } = useArticleDetail(id);
  const [textAreaValue, setTextAreaValue] = useState<string>(content);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      modal.remove();
    }
  };
  const handleTextAreaValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const handleFocusToEnd = (e: FocusEvent<HTMLTextAreaElement>) => {
    const textArea = e.target;
    const textLength = textArea.value.length;
    textArea.setSelectionRange(textLength, textLength);
  };

  const handleCancelClick = () => {
    modal.remove();
  };

  const handleModifyButtonClick = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!textAreaValue.trim()) {
        alert('본문을 입력해주세요.');
        return;
      }
      await modifyArticle({ id: id, content: textAreaValue });
      modal.remove();
    },
    [modifyArticle, id, textAreaValue],
  );

  return (
    <Dialog open={modal.visible} onOpenChange={handleOpenChange}>
      <DialogContent>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleModifyButtonClick}>
          <div className="flex flex-col space-y-1.5 border-b p-6 text-2xl font-semibold leading-none tracking-tight">
            {title}
          </div>
          <Textarea
            className="h-72 w-full resize-none p-6 text-base"
            value={textAreaValue}
            onChange={handleTextAreaValue}
            onFocus={handleFocusToEnd}
          />
          <DialogFooter className="flex gap-4 px-4">
            <Button className="h-10 w-14 px-6" onClick={handleCancelClick}>
              취소
            </Button>
            <Button className="h-10 w-14 px-6" type="submit">
              수정
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const ArticleModifyModal =
  NiceModal.create<ArticleModifyModalProps>(_ArticleModifyModal);
