import { memo } from 'react';

export const UserIconWithName = memo((props) => {
  /*
   ユーザの名前と画像は、このアプリでは、セットで利用する。
   そのため、atomsに分けることもなく、moleculesとして定義する
   */
  const { img, name } = props;

  return (
    <>
      <img alt="プロフィール画像" src={img} />
      <p>{name}</p>
    </>
  );
});
