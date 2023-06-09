import React, { createContext, useState } from 'react';
import { AsyncStorage } from 'react-native';
import api from './utils/api';

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

  const signup = async (name, lname, mobileNum, password) => {
    try {
      setLoading(true);
      const response = await api.post('/user/create', {
        fname: name,
        lname,
        mobile_num: mobileNum,
        password,
      });

      const { accessToken, id, fname, lname, mobile_num } = response.data.data;
      return response.data;
      const userObject = {
        data
      };

      await AsyncStorage.setItem('user', JSON.stringify(userObject));
      setUser(userObject);
      console.log(userObject).;
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
