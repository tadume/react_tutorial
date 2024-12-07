export const App = () => {
  // インラインスタイル用のオブジェクトを作成
  const worldStle = {
    fontSize: 15,
    color: 'blue',
  };

  // イベント関数を作成
  const alertEvent = () => alert('初めてのイベント');

  return (
    <>
      <h1 style={{ fontSize: 30, color: 'red' }}>Hello</h1>
      <h1 style={worldStle}>World</h1>
      <button onClick={alertEvent}>クリック</button>
    </>
  );
};
