import { memo } from 'react';
import { useParams } from 'react-router-dom';

export const Page2 = memo(() => {
  console.log('--page2--');
  const { id } = useParams();

  return (
    <>
      <h1>Page2画面</h1>
      <p>パラメータは{id}です。</p>
    </>
  );
});
