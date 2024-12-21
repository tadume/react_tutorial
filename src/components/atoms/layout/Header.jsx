import { memo } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header = memo(() => {
  return (
    <>
      <SHeader>
        <SLink to="/">Home</SLink>
        <SLink to="/user">user</SLink>
      </SHeader>
    </>
  );
});

const SHeader = styled.header`
  height: 50px;
  background-color: #11999e;
  margin: 0px;
  text-align: center;
  position: flex;
  top: 0;
`;

const SLink = styled(Link)`
  color: #fff;
  padding: 100px;
`;
