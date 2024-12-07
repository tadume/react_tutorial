export const Page1 = () => {
  console.log('-----Page1------');

  // 再レンダリングする必要のないコンポーネントなのに、App.jsxでstateを更新した際にこちらも更新されている。。
  return <h2>Page1です。</h2>;
};
