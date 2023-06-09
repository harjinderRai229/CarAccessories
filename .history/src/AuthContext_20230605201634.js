import React, { createContext, useState } from 'react';
import { AsyncStorage } from 'react-native';
import api from './'
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (mobileNum, password) => {
    try {
      setLoading(true);
      const response = await api.post('/user/login', {
        mobile_num: mobileNum,
        password,
      });

      const { accessToken, id, fname, lname, mobile_num } = response.data.data;

      const userObject = {
        accessToken,
        id,
        fname,
        lname,
        mobile_num,
      };

      await AsyncStorage.setItem('user', JSON.stringify(userObject));
      setUser(userObject);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, password) => {
    try {
      setLoading(true);
      // Perform signup API request and handle the response
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const authContextValue = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
