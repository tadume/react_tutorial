import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Page1Routes } from './Page1Routes';
import { Home } from '../Home';
import { Page1 } from '../Page1';
import { Page2 } from '../Page2';
import { StateParameter } from '../StateParameter';
import { NextPage } from '../NextPage';
import { Page404 } from '../Page404';
import { HeaderOnly } from '../components/templates/HeaderOnly';
import { Users } from '../components/pages/Users';
import { Top } from '../components/pages/Top';

export const Router = memo(() => {
  return (
    /* ルーティングを定義する */
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1">
        <Route index element={<Page1 />} />
        {Page1Routes.map((url) => (
          <Route key={url.path} path={url.path} element={url.element} />
        ))}
      </Route>
      <Route path="/page2/:id" element={<Page2 />} />
      <Route path="/stateparameter" element={<StateParameter />} />
      <Route path="/next" element={<NextPage />} />
      <Route path="*" element={<Page404 />} />

      <Route
        path="/users"
        element={
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        }
      />
      <Route
        path="/top"
        element={
          <HeaderOnly>
            <Top />
          </HeaderOnly>
        }
      />
    </Routes>
  );
});
