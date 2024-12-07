import { memo } from 'react';
import { Link } from 'react-router-dom';

export const Home = memo(() => {
  console.log('-----Home------');

  return (
    <>
      <h1>Home画面</h1>
      {/* 実施に遷移するために、リンクを記載する */}
      <div>
        <Link to="/page1">Page1に遷移</Link>
      </div>
      <div>
        <Link to="/page2">Page2に遷移</Link>
      </div>
    </>
  );
});
