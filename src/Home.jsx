import { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchInput } from '../src/components/molecules/SearchInput';

export const Home = memo(() => {
  console.log('-----Home------');
  const navigate = useNavigate();

  // StateParameter画面に渡すためのデータを生成(APIから取得したと仮定)
  const data1 = 100;
  const data2 = 'aaaa';

  // navigateで画面遷移するためのイベント関数
  const nextPage = () => navigate('/next');

  return (
    <>
      <h1>Home画面</h1>
      {/* 実施に遷移するために、リンクを記載する */}
      <div>
        <Link to="/page1">Page1に遷移</Link>
      </div>
      <div>
        <Link to="/page2/11">Page2に遷移</Link>
      </div>
      <div>
        <Link to="/stateparameter" state={{ data1: data1, data2: data2 }}>
          StateParameter画面に遷移
        </Link>
      </div>
      <button onClick={nextPage}>Next画面</button>

      <hr />

      <div>
        <SearchInput />
      </div>
    </>
  );
});
