import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './utils/api';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for existing user session in AsyncStorage
    const checkUserSession = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.log('Error retrieving user session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUserSession();
  }, []);
  const login = async (mobileNum, password) => {
    try {
      setLoading(true);
      const response = await api.post('/user/login', {
        mobile_num: mobileNum,
        password,
      });

      const { data, message, status } = response.data;

      if (status === 1) {
        await AsyncStorage.setItem('user', JSON.stringify(data));
        setUser(data);
      }

      return { data, message, status }; // Return the API response
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

      const { data, message, status } = response.data;

      if (status === 1) {
        await AsyncStorage.setItem('user', JSON.stringify(data));
        setUser(data);
      }

      return { data, message, status }; // Return the API response
    } catch (error) {
      setError(error.message);
      throw error; // Rethrow the error to be handled in the component
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  const authContextValue = {
    user,
    loading,
    error,
    login,
    signUp,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
