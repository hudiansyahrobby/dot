import React from 'react';
import firebase from '../firebase';

export const AuthContext = React.createContext<any>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState<any>(null);

  React.useEffect(
    () => firebase.auth().onAuthStateChanged((user) => setCurrentUser(user)),
    [],
  );

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
