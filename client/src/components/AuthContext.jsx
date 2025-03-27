import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('loggedInUser', JSON.stringify(userData));
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};