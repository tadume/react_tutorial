import { memo } from 'react';
import styled from '@emotion/styled';
import { BaseButton } from './BaseButton';

export const SecondaryButton = memo((props) => {
  const { children } = props;
  const StyledButton = styled(BaseButton)`
    background-color: rgb(133, 129, 233);
  `;

  return <StyledButton>{children}</StyledButton>;
});
