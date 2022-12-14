// Context と Provider を利用したグローバルな状態管理
import React, { createContext, useState } from "react";

export const UserContext = createContext({});

// props で指定した子要素をコンテキストによる状態管理の対象とする
export const UserProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
