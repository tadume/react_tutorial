import { memo, useContext } from 'react';
import { UserCard } from '../organisms/user/UserCard';
import { SearchInput } from '../molecules/SearchInput';
import styled from '@emotion/styled';

export const Users = memo(() => {
  /*
    ユーザ一覧画面
    pagesは、templateと一緒に、Router.jsxで直接レンダリングする
    ここで、templateを除くコンポーネントの組み合わせを行う
  */
  console.log('--Users--');

  // 管理者権限をstateとして保持させる

  // usersオブジェクトを取得
  const users = [...Array(10).keys()].map((value) => ({
    id: value,
    name: `tester-${value}`,
    img: 'https://source.unsplash.com/bIhpiQA009k',
    email: 'test1@example.com',
    tel: '000-0000-0000',
    company: {
      name: 'test株式会社',
    },
    website: 'https://google.com',
  }));

  return (
    <>
      <SContainer>
        <h1>ユーザ一覧画面</h1>
        <SearchInput />
        <SUserArea>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </SUserArea>
      </SContainer>
    </>
  );
});

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
