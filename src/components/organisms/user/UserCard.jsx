import { memo } from 'react';
import styled from '@emotion/styled';
import { Card } from '../../atoms/div/Card';
import { UserIconWithName } from '../../molecules/UserIconWithName';

export const UserCard = memo(() => {
  /*
    ユーザ一人用のカードを作成する。
  */

  // 本来はAPIから取得したデータを使用するが、今回はオブジェクトとして既に取得しているとする
  const user = {
    img: 'https://source.unsplash.com/bIhpiQA009k',
    name: '山田太郎',
    mail: 'test@example.com',
    tel: 'xxx-xxxx-xxxx',
    company: {
      name: 'xxx株式会社',
    },
    webSite: 'https://hogehoge.com',
  };

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
