import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page1DetailA } from './Page1DetailA';
import { Page1DetailB } from './Page1DetailB';

export const App = () => {
  return (
    <>
      {/* ルーティングを定義する */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1">
            <Route index element={<Page1 />} />
            <Route path="detaila" element={<Page1DetailA />} />
            <Route path="detailb" element={<Page1DetailB />} />
          </Route>
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
