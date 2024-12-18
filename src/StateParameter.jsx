import { memo } from 'react';
import { useLocation } from 'react-router-dom';

export const StateParameter = memo(() => {
  // 全画面でデータをAPIから取得したらしい
  // それが、stateとして送られてくる
  console.log('---StateParameter---');

  // stateは、useLocationで受け取る
  const { state } = useLocation();

  // データをオブジェクト分割代入で取得
  const { data1, data2 } = state;

  return (
    <>
      <p>前画面から取得した値:</p>
      <div>データ1: {data1}</div>
      <div>データ2: {data2}</div>
    </>
  );
});
