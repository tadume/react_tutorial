import { memo } from 'react';

export const Page1 = memo(() => {
  console.log('-----Page1------');

  // 再レンダリングする必要のないコンポーネントなのに、App.jsxでstateを更新した際にこちらも更新されている。。
  // メモ化したことで最初の一回しか再レンダリングされなくなった!!!!
  return <h2>Page1です。</h2>;
});
