import { memo } from 'react';
import styled from '@emotion/styled';
import { BaseButton } from './BaseButton';

export const PrimaryButton = memo((props) => {
  /* コンポーネントの役割
    どの画面でも統一したボタンのレイアウトにしたい => propsでは、ボタンの名前だけもらう
    BaseButtonのスタイルを上書きしてPrimaryな背景色にする
  */
  const { children } = props;

  const StyledButton = styled(BaseButton)`
    background-color: rgba(25, 215, 180, 0.78);
  `;

  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
});
