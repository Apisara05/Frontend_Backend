import { useEffect, useState } from "react";
import TokenService from "../services/token.services";
import { UserContext } from "./UserContext.jsx";
export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState( getUser );
  const login = (user) => setUserInfo(user);
  const logout = () => {
    setUserInfo(null);
  };

  function getUser() {
    const savedUser = TokenService.getUser() || null;
    return savedUser;
  }
  useEffect(() => {
    TokenService.setUser(userInfo);
  }, [userInfo]);
  return (
    <UserContext.Provider value={{ userInfo, login, logout, getUser }}>
      {children}
    </UserContext.Provider>
  );
};
