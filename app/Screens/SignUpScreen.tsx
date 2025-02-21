import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CustomeButton from "../../components/ui/customeButton";
import CustomeInput from "../../components/ui/customeInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BackButton from "@/components/ui/backButtton";
import { useFonts } from "expo-font";
import { useState } from "react";
import CustomeScreen from "@/components/ui/customeScreen";

export default function SignUpScreen() {
  let [fontsLoaded] = useFonts({
    "Antonio Bold": require("../../assets/fonts/Antonio-Bold.ttf"),
    "Antonio regular": require("../../assets/fonts/Antonio-Regular.ttf"),
  });
  const fontFamily = fontsLoaded ? "Antonio regular" : "Arial,sans-serif";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <StatusBar backgroundColor="black" style="light" />
      <CustomeScreen Style={styles.ViewContainer} number={1} index={0}>
        <View style={styles.ButtonContainer}>
          <BackButton />
        </View>
        <View style={styles.SignUpContainer}>
          <Text style={styles.LetsText}>
            LETS <Text style={styles.RideText}>RIDE</Text>
          </Text>
          <Text style={styles.Text}>Sign Up</Text>
          <CustomeInput
            value={email}
            setValue={setEmail}
            placeholder="Enter your email"
            secureTextEntry={false}
            imageSource={require("../../assets/images/mail.png")}
          />
          <CustomeInput
            value={password}
            setValue={setPassword}
            placeholder="Enter your password"
            secureTextEntry={true}
            imageSource={require("../../assets/images/padlock.png")}
            imageSource2={require("../../assets/images/view.png")}
            imageSource3={require("../../assets/images/hide.png")}
          />
          <CustomeInput
            value={confirmPassword}
            setValue={setConfirmPassword}
            placeholder="Confirm your password"
            secureTextEntry={true}
            imageSource={require("../../assets/images/padlock.png")}
            imageSource2={require("../../assets/images/view.png")}
            imageSource3={require("../../assets/images/hide.png")}
          />
          <CustomeButton
            fontStyle={{ fontFamily }}
            title="Sign Up"
            backgroundColor="black"
            onPress={() => {}}
          />
        </View>
      </CustomeScreen>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  ViewContainer: {
    flex: 1,
    alignItems: "center",
  },
  ButtonContainer: {
    width: "100%",
  },
  SignUpContainer: {
    gap: 10,
    width: "90%",
    height: "90%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  LetsText: {
    fontSize: 40,
    color: "white",
    fontFamily: "Antonio regular",
  },
  RideText: {
    fontSize: 40,
    color: "#506FFD",
    fontFamily: "Antonio Bold",
  },
  Text: {
    color: "white",
    fontFamily: "Antonio regular",
    fontSize: 20,
  },
  CustomeButton: {
    fontFamily: "Antonio regular",
  },
});
