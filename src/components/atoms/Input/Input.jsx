import { memo } from 'react';
import styled from '@emotion/styled';

export const Input = memo((props) => {
  const { placeholder = '' } = props;

  return (
    <>
      <StyledInput placeholder={placeholder} />
    </>
  );
});

const StyledInput = styled.input`
  padding: 5px;
  width: 300px;
`;
