import { memo } from 'react';
import { Header } from '../atoms/layout/Header';

export const HeaderOnly = memo((props) => {
  /*
    画面にヘッダーのみを提供するためのtemplate
    templateなので、中身は持たない
    画面の要素を組み合わせるだけ
  */
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
