import { type PropsWithChildren } from 'react';

const LayoutBody = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto mt-6 size-full max-w-[1080px] p-2 md:mt-14">
      {children}
    </div>
  );
};
export default LayoutBody;
