/** @format */

import { Outlet } from 'react-router-dom';

// components
import { AppContentBox } from '../Box/Box';
import TestPage5 from '../../../pages/Test/TestPage5';

export const AppContent = () => {
  return (
    <AppContentBox>
      <Outlet />
      <TestPage5 />
    </AppContentBox>
  );
};
