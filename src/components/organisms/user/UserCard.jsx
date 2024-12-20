import { memo } from 'react';
import styled from '@emotion/styled';

export const UserCard = memo(() => {
  /*
    ユーザ一人用のカードを作成する。
    最初は、わかりやすいように雛形として、atoms, moleculesの分割はしないで作成する
  */
  return (
    <SContainer>
      <img alt="プロフィール画像" />
      <p>名前</p>
      <dl>
        <dt>メール</dt>
        <dd>test@example.com</dd>
        <dt>TEL</dt>
        <dd>xxx-xxxx-xxxx</dd>
        <dt>会社名</dt>
        <dd>xxx株式会社</dd>
        <dt>WEB</dt>
        <dd>https://hogehoge.com</dd>
      </dl>
    </SContainer>
  );
});

const SContainer = styled.div`
  min-width: 200px;
  min-height: 200px;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  border: 1px solid black;
`;
