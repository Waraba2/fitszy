import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const value = {
    isLoggedIn,
    setisLoggedIn
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};



