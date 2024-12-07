import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

export const App = () => {
  return (
    <>
      {/* ルーティングを定義する */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
