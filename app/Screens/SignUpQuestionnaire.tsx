import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import SkipButton from "@/components/ui/skipButton";
import { useFonts } from "expo-font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomeButton from "@/components/ui/customeButton";

const SignUpQuestionnaire = () => {
  let [fontsLoaded] = useFonts({
    "Antonio Bold": require("../../assets/fonts/Antonio-Bold.ttf"),
    "Antonio regular": require("../../assets/fonts/Antonio-Regular.ttf"),
  });

  const fontFamily = fontsLoaded ? "Antonio regular" : "Arial,sans-serif";
  const [motorcycleTypeInput, setmotorcycleTypeInput] = useState<string>("");
  const [rideStyleInput, setrideStyleInput] = useState<string>("");
  const [rideExperienceInput, setrideExperienceInput] = useState<string>("");
  const [howOfterInput, sethowOftenInput] = useState<string>("");

  const motorcycleType = [
    { key: "1", value: "Cruiser" },
    { key: "2", value: "Sportbike" },
    { key: "3", value: "Touring" },
    { key: "4", value: "Adventure/Dual-Sport" },
    { key: "5", value: "Dirt Bike" },
    { key: "6", value: "Chopper" },
    { key: "7", value: "Scooter" },
    { key: "10", value: "Other" },
  ];

  const rideStyle = [
    { key: "1", value: "Commuting/City riding" },
    { key: "2", value: "Long-distance touring" },
    { key: "3", value: "Racing" },
    { key: "4", value: "Off-road/Trail riding" },
    { key: "5", value: "Cruising" },
    { key: "6", value: "Other" },
  ];

  const rideExperience = [
    { key: "1", value: "Less than 1 year" },
    { key: "2", value: "1 to 2 years" },
    { key: "3", value: "3 to 5 years" },
    { key: "4", value: "6 to 10 years" },
    { key: "5", value: "Over 10 years" },
  ];
  const howOften = [
    { key: "1", value: "Daily" },
    { key: "2", value: "Several times a week" },
    { key: "3", value: "Once a week" },
    { key: "4", value: "A few times a month" },
    { key: "5", value: "Rarely" },
  ];

  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <StatusBar backgroundColor="black" style="light" />
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.buttonContainer}>
          <SkipButton
            buttonStyle={styles.SkipButton}
            fontStyle={styles.SkipButtonText}
          />
        </View>
        <View style={styles.ViewContainer}>
          <Text style={styles.header}>Tell us about yourself</Text>
          <SelectList
            data={motorcycleType}
            setSelected={setmotorcycleTypeInput}
            placeholder="What type of motorcycle do you ride?"
           
            boxStyles={styles.boxStyles}
            inputStyles={styles.inputStyles}
            dropdownStyles={styles.dropdownStyle}
            dropdownTextStyles={styles.inputStyles}
          />
          <SelectList
            data={rideStyle}
            setSelected={setmotorcycleTypeInput}
            placeholder="What is your riding style?"
            save="value"
            boxStyles={styles.boxStyles}
            inputStyles={styles.inputStyles}
            dropdownStyles={styles.dropdownStyle}
            dropdownTextStyles={styles.inputStyles}
          />
          <SelectList
            data={rideExperience}
            setSelected={setmotorcycleTypeInput}
            placeholder="What is your experience level?"
            save="value"
            boxStyles={styles.boxStyles}
            inputStyles={styles.inputStyles}
            dropdownStyles={styles.dropdownStyle}
            dropdownTextStyles={styles.inputStyles}
          />
          <SelectList
            data={howOften}
            setSelected={setmotorcycleTypeInput}
            placeholder="How often do you ride?"
            save="value"
            boxStyles={styles.boxStyles}
            inputStyles={styles.inputStyles}
            dropdownStyles={styles.dropdownStyle}
            dropdownTextStyles={styles.inputStyles}
          />
          <View style={styles.continueButton}>
            <CustomeButton
              title="Continue"
              backgroundColor="black"
              fontStyle={{ fontFamily }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  ViewContainer: {
    flexDirection: "column",
    height: "80%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  header: {
    color: "white",
    fontSize: 20,
  },
  contentContainer: {
    flexGrow: 1,
  },
  buttonContainer: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
  },
  SkipButton: {
    width: 60,
    height: 40,
    justifyContent: "center",
  },
  SkipButtonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Antonio regular",
  },
  boxStyles: {
    backgroundColor: "gray",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    width: "90%",
    fontFamily: "Antonio regular",
  },
  inputStyles: {
    color: "white",
    fontSize: 15,
    fontFamily: "Antonio regular",
  },
  dropdownStyle: {
    backgroundColor: "gray",
    borderColor: "white",
  },
  continueButton: {
    width: "90%",
    height: "12%",
  },
});

export default SignUpQuestionnaire;
