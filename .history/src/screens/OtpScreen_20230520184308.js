import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  AsyncStorage,
} from "react-native";

const OtpVerifyScreen = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = async () => {
    // TODO: Send otp to server and verify
    try {
      await AsyncStorage.setItem("otp", otp);
      setTimeLeft(30);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTimer = () => {
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    } else {
      // OTP expired
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <View style={styles.boxes}>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          onChangeText={handleOtpChange}
        />
        <Text style={styles.timer}>{timeLeft}</Text>
      </View>
      <Button
        style={styles.button}
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 5,
  },
  timer: {
    fontSize: 18,
    color: "red",
  },
  boxes: {
    width: 300,
    height: 40,
    borderRadius: 5,
    backgroundColor: "white",
  },
});

export default OtpVerifyScreen;
