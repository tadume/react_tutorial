import { useEffect, useState } from 'react';

export const App = (props) => {
  const [isShowFace, setIsShowFace] = useState(false);
  const [num, setNum] = useState(0);
  // console.log('------App-------');

  // イベントでisShowFaceの値を更新しても、再レンダリングで、ここが使用されるため、結局数字でしか顔文字が表示できなくなっている。
  // if (num > 0) {
  //   if (num % 3 === 0) {
  //     isShowFace || setIsShowFace(true);
  //   } else {
  //     isShowFace && setIsShowFace(false);
  //   }
  // }

  // 上記を改善。
  // useEffectにより、上記処理が再レンダリングされるケースを制限する。
  // 数字が更新された時だけで良いので、 第二引数に、 numを与える
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

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
    </>
  );
};
