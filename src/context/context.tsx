'use client'
import { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
}

const initialUser: User = {
  email: '',
  firstName: '',
  lastName: '',
  mobileNumber: '',
};

interface UserContextType {
  userData: User;
  setUserData: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextType>({
  userData: initialUser,
  setUserData: () => {},
});

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<User>(initialUser);

  const contextValue: UserContextType = { userData, setUserData };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export function useAppContext() {
  return useContext(UserContext);
}
