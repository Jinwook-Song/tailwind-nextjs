import React from 'react';
import { cls } from '../libs/utils';

interface ILayout {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

const Layout = ({ title, canGoBack, hasTabBar, children }: ILayout) => {
  return (
    <div>
      <div className='w-full bg-white text-lg font-medium py-3 fixed top-0 text-gray-800 border-b flex items-center justify-center'>
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls('pt-16', hasTabBar ? 'pb-16' : '')}>{children}</div>
      {hasTabBar ? (
        <nav className='bg-white text-gray-800 border-t fixed bottom-0 pb-10 pt-3 flex justify-between items-center'></nav>
      ) : null}
    </div>
  );
};

export default Layout;
