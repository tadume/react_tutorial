export const App = (props) => {
  // オブジェクトの分割代入
  // 初期値を持たせる
  const { color = 'black', children } = props;
  // インラインスタイル用のオブジェクトを作成
  const worldStyle = {
    fontSize: 15,
    //keyとvalueの変数名が同じである場合、省略できるんだった
    color,
  };

  // イベント関数を作成
  const alertEvent = () => alert('初めてのイベント');

  return (
    <>
      <h1 style={{ fontSize: 30, color: 'red' }}>Hello</h1>
      <h1 style={worldStyle}>{children}</h1>
      <button onClick={alertEvent}>クリック</button>
    </>
  );
};
