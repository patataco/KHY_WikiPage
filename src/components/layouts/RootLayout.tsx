import { type PropsWithChildren } from 'react';

const RootLayout = ({ children }: PropsWithChildren) => {
  return <main className="flex h-screen flex-col">{children}</main>;
};

export default RootLayout;
