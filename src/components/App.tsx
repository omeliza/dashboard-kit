import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from 'routs';

const App = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
