import { memo } from 'react';
import styled from '@emotion/styled';
import { Card } from '../../atoms/div/Card';
import { UserIconWithName } from '../../molecules/UserIconWithName';
import { useLocation } from 'react-router-dom';

export const UserCard = memo((props) => {
  /*
    ユーザ一人用のカードを作成する。
  */
  console.log('----UserCard----');

  const { user } = props;

  return (
    <Card>
      <UserIconWithName img={user.img} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.mail}</dd>
        <dt>TEL</dt>
        <dd>{user.tel}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.webSite}</dd>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    overflow-wrap: break-word;
  }
`;
