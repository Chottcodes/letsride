import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import CustomeInput from "../../components/ui/customeInput";
import { useState } from "react";
import CustomeButton from "@/components/ui/customeButton";

export default function LoginScreen() {
  let [fontsLoaded] = useFonts({
    "Antonio Bold": require("../../assets/fonts/Antonio-Bold.ttf"),
    "Antonio regular": require("../../assets/fonts/Antonio-Regular.ttf"),
  });
  const fontFamily = fontsLoaded ? "Antonio regular" : "Arial,sans-serif";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.SafeViewContainer}>
      <StatusBar backgroundColor="black" style="light" />

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingViewContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={50}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <Image
              source={require("../../assets/images/LetsRide.png")}
              style={styles.headerImage}
            />
            <Text style={[styles.slogantext, { fontFamily }]}>
              Connecting Riders, One Mile At A Time
            </Text>
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
            <CustomeButton
              borderColor="transparent"
              borderWidth={0}
              title="Login"
              fontStyle={{ fontFamily }}
            />
            <CustomeButton
              borderColor="white"
              borderWidth={2}
              backgroundColor="black"
              title="Sign Up"
              fontStyle={{ fontFamily }}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeViewContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  keyboardAvoidingViewContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  viewContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    alignItems: "center",
  },
  headerImage: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
  slogantext: {
    fontFamily: "Antonio regular",
    fontSize: 15,
    textAlign: "center",
    width: "80%",
    color: "white",
  },
});
