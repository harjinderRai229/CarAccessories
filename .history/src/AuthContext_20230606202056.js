import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

      return response.data; // Return the API response
    } catch (error) {
      setError(error.message);
      throw error; // Rethrow the error to be handled in the component
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (mobileNum, password, fname, lname) => {
    try {
      setLoading(true);
      const response = await api.post('/user/create', {
        mobile_num: mobileNum,
        password,
        fname,
        lname,
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

      return response.data; // Return the API response
    } catch (error) {
      setError(error.message);
      throw error; // Rethrow the error to be handled in the component
    } finally {
      setLoading(false);
    }
  };

  const authContextValue = {
    user,
    loading,
    error,
    login,
    signUp,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
