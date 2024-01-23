import { type PropsWithChildren } from 'react';

import Header from '~/components/common/Header';
import LayoutBody from '~/components/layouts/LayoutBody';
import RootLayout from '~/components/layouts/RootLayout';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <RootLayout>
      <Header />
      <LayoutBody>{children}</LayoutBody>
    </RootLayout>
  );
};
export default Layout;
