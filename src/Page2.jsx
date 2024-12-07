import { memo } from 'react';

export const Page2 = memo(() => {
  console.log('--page2--');
  return <h2>Page2画面</h2>;
});
