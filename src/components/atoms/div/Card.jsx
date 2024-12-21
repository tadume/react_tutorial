import { memo } from 'react';
import styled from '@emotion/styled';

export const Card = memo((props) => {
  /*
    カードを提供するコンポーネント
    なので、カードの中身をpropsで受け取る
    どこでも使えるカードにするので、カードのサイズは、外部の責務とする!!!!
  */
  const { children } = props;

  return <SContainer>{children}</SContainer>;
});

const SContainer = styled.div`
  border-radius: 5px;
  border: 1px solid black;
`;
