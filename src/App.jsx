import { useState } from 'react';

export const App = (props) => {
  // stateを定義
  const [num, setNum] = useState(0);

  // オブジェクトの分割代入
  // 初期値を持たせる
  const { color = 'black', children } = props;
  // インラインスタイル用のオブジェクトを作成
  const worldStyle = {
    fontSize: 15,
    //keyとvalueの変数名が同じである場合、省略できるんだった
    color,
  };

  // stateの更新イベント
  // const plusNum = () => setNum(num + 1);

  // Reactがstateをバッチ化していることを確認
  const testPlusNum = () => {
    // 1回しか実行されない(最後に実行されるstateの更新のみが行われる!!)
    console.log('state更新');
    setNum(num + 1);
    setNum(num + 1); // これだけ実行される
  };

  return (
    <>
      <h1 style={{ fontSize: 30, color: 'red' }}>Hello</h1>
      <h1 style={worldStyle}>{children}</h1>
      <button onClick={testPlusNum}>クリック!</button>
      <div style={{ textAlign: 'center', fontSize: 20 }}>{num}</div>
    </>
  );
};
