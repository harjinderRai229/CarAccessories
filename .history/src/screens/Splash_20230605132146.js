import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { useSelector } from 'react-redux';

const SplashScreen = ({ navigation }) => {
  const logoOpacity = new Animated.Value(0);
  const accessToken = useSelector(state => state.accessToken); // Replace 'accessToken' with your actual state key

  useEffect(() => {
    checkAccessToken();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const isLoggedIn = user !== null;

      if (isLoggedIn) {
        // User is logged in
        const userObject = JSON.parse(user);
        dispatch(setSession(userObject));
        navigation.replace('Drawer1'); // Replace with your desired screen after login
      } else {
        // User is not logged in
        navigation.replace('Login'); // Replace with your login screen
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Splash;
In the above code, the Splash component checks if the user is logged in by retrieving the user data from AsyncStorage. If the user data exists, it dispatches the setSession action with the user object and navigates to the main screen (e.g., 'Drawer1'). If the user data doesn't exist, it navigates to the login screen.

To implement the logout functionality, you can create a separate Logout component and dispatch the clearSession action:
javascript
Copy code
const Logout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Clear user data from AsyncStorage
      await AsyncStorage.removeItem('user');
      // Dispatch the clearSession action
      dispatch(clearSession());
      // Navigate to the login screen
      navigation.replace('Login'); // Replace with your login screen
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Logout;
In this Logout component, the handleLogout function removes the user data from AsyncStorage, dispatches the clearSession action, and navigates to the login screen.

Remember to replace the screen names ('Login', 'Drawer1') with your actual screen names in the navigation calls.

These implementations ensure that the user session is managed correctly and the user is redirected to the appropriate screen based on their login status.





User
this is splash add here import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { useSelector } from 'react-redux';

const SplashScreen = ({ navigation }) => {
  const logoOpacity = new Animated.Value(0);
  const accessToken = useSelector(state => state.accessToken); // Replace 'accessToken' with your actual state key

  useEffect(() => {
    checkAccessToken();
  }, []);

  const checkAccessToken = () => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      if (accessToken) {
        navigation.replace('Drawer1');
      } else {
        navigation.replace('Login');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/11.jpg')}
        resizeMode='contain'
        style={[styles.logo, { opacity: logoOpacity }]}
      />

      <Text style={styles.subTitle}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    marginBottom: 20,
    width: '50%',
    height: '50%',
  },
  subTitle: {
    fontSize: 20,
    color: '#000',
    opacity: 0.5,
  },
});

export default SplashScreen;
ChatGPT
Great! It seems like you have already implemented the Splash component. The code you provided looks good, and it follows a similar structure to what I suggested earlier. The checkAccessToken function checks if the accessToken exists, and based on that, it navigates to the appropriate screen using navigation.replace().

The logoOpacity variable is an Animated.Value that controls the opacity of the logo image, and it's animated using the Animated.timing method. This creates a fade-in effect for the logo.

The SplashScreen component renders a View with a logo image and a loading text. Once the logo opacity animation completes, the checkAccessToken function is called to determine the next screen to navigate to.

Overall, your Splash component looks good, and it should work as intended. Let me know if you have any further questions!








  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/11.jpg')}
        resizeMode='contain'
        style={[styles.logo, { opacity: logoOpacity }]}
      />

      <Text style={styles.subTitle}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    marginBottom: 20,
    width: '50%',
    height: '50%',
  },
  subTitle: {
    fontSize: 20,
    color: '#000',
    opacity: 0.5,
  },
});

export default SplashScreen;
