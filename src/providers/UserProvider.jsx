import React, { createContext, useState } from 'react';

// 外部で利用範囲を囲うためのテキストコンポーネント
export const UserContext = createContext({});

// propsには、画面コンポーネントが入る
export const UserProvider = (props) => {
  const [userInfo, setUserInfo] = useState(null);

  const { children } = props;

  // childrenが使用できるstateを渡してあげる。

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
