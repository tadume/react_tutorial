import { memo } from 'react';

export const Page1 = memo((props) => {
  const { allowexecution } = props;
  console.log('-----Page1------');

  // アロー関数をもらっているが、関数の中身も最初に定義した後は変わらないため、再レンダリング不要としたい。
  // memo化しても、アロー関数は再レンダリング時に、新規に定義されてしまうので、際レンダリングが起きてしまう。。
  return <button onClick={allowexecution}>Page1のボタン</button>;
});
