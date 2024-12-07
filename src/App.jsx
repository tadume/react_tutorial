import { useCallback, useState } from 'react';
import { Page1 } from './Home';

export const App = (props) => {
  const [isShowFace, setIsShowFace] = useState(false);
  const [num, setNum] = useState(0);

  const onOffIsShowFace = () => {
    console.log('on/off');
    setIsShowFace(!isShowFace);
  };
  const plusNum = () => setNum(num + 1);

  // 子コンポーネントに渡すアロー関数
  // stateが更新された時に、無駄に新規にアロー関数が定義されないようにuseCallbackを使用して、際レンダリングを抑制
  // 今回は、最初に定義したら変更する必要がないため、第二引数は空
  const allowexecution = useCallback(() => alert('Page1のアラート'), []);

  return (
    <>
      <button onClick={onOffIsShowFace}>On/Off</button>
      <div style={{ textAlign: 'center', fontSize: 30 }}>
        {isShowFace && <p>(^^;)</p>}
      </div>
      <hr />
      <button onClick={plusNum}>CountUp</button>
      <div style={{ textAlign: 'center', fontSize: 30 }}>{num}</div>
      <Page1 allowexecution={allowexecution} />
    </>
  );
};
