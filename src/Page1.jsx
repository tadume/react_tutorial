import { memo } from 'react';

export const Page1 = memo(() => {
  console.log('---page1---');
  return <h2>Page1画面</h2>;
});
