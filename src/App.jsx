import { useState } from 'react';
import { Page1 } from './Home';

export const App = (props) => {
  const [isShowFace, setIsShowFace] = useState(false);
  const [num, setNum] = useState(0);

  const onOffIsShowFace = () => {
    console.log('on/off');
    setIsShowFace(!isShowFace);
  };
  const plusNum = () => setNum(num + 1);

  return (
    <>
      <button onClick={onOffIsShowFace}>On/Off</button>
      <div style={{ textAlign: 'center', fontSize: 30 }}>
        {isShowFace && <p>(^^;)</p>}
      </div>
      <hr />
      <button onClick={plusNum}>CountUp</button>
      <div style={{ textAlign: 'center', fontSize: 30 }}>{num}</div>
      <Page1 />
    </>
  );
};
