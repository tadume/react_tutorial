import { memo } from 'react';
import { Link } from 'react-router-dom';

export const Page1 = memo(() => {
  console.log('---page1---');
  return (
    <>
      <h2>Page1画面</h2>
      <div>
        <Link to="/page1/detaila">詳細画面A </Link>
      </div>
      <div>
        <Link to="/page1/detailb">詳細画面B </Link>
      </div>
    </>
  );
});
