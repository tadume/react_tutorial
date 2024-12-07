import { Page1DetailA } from '../Page1DetailA';
import { Page1DetailB } from '../Page1DetailB';

// Homeルート直下のルーティング内容をオブジェクトで保持する
export const Page1Routes = [
  {
    path: 'detailA',
    element: <Page1DetailA />,
  },
  {
    path: 'detailB',
    element: <Page1DetailB />,
  },
];
