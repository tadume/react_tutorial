import { memo } from 'react';
import styled from '@emotion/styled';
import { UserContext } from '../../providers/UserProvider';
import { useContext } from 'react';

export const UserIconWithName = memo((props) => {
  /*
   ユーザの名前と画像は、このアプリでは、セットで利用する。
   そのため、atomsに分けることもなく、moleculesとして定義する
   */

  console.log('--UserIconWithName--');

  // グローバルstateから改めて、ユーザ情報を取得
  const { userInfo } = useContext(UserContext);

  // オブジェクト分割代入でユーザ情報から管理者権限有無のみ取得
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  const { img, name } = props;

  return (
    <>
      <img alt="プロフィール画像" src={img} />
      <p>{name}</p>
      {isAdmin && <SEdit>編集</SEdit>}
    </>
  );
});

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
