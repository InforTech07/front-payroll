"use client";
import React from 'react';
import SideBar from '@/components/navs/sidebar';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

interface LayoutAppProps {
    children: React.ReactNode;
}

function LayoutApp({ children }: LayoutAppProps) {
  return (
    <Provider store={store}>
      <div className="bg-base-100 w-full h-screen flex flex-row gap-6 mx-auto px-2 py-2 md:px-2 py-2 xl:px-6 py-4">
            <div className="w-48">
              <SideBar />
            </div>
            <div className="w-10/12">
              {children}
            </div>
      </div>
    </Provider>
  );
}

export default LayoutApp;