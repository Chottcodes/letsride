import React from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,  // ScrollView to make the content scrollable
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomeScreen from "@/components/ui/customeScreen";
import SkipButton from "@/components/ui/skipButton";
import { useFonts } from "expo-font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUpQuestionnaire = () => {
  let [fontsLoaded] = useFonts({
    "Antonio Bold": require("../../assets/fonts/Antonio-Bold.ttf"),
    "Antonio regular": require("../../assets/fonts/Antonio-Regular.ttf"),
  });

  const fontFamily = fontsLoaded ? "Antonio regular" : "Arial,sans-serif";
  const [selected, setSelected] = React.useState<string>("");
  const [rideStyleInput, setrideStyleInput] = React.useState<string>("");
  const [rideExperienceInput, setrideExperienceInput] = React.useState<string>("");
  const [howOfterInput, sethowOftenInput] = React.useState<string>("");

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
      <KeyboardAwareScrollView
        style={styles.keyboardAvoidingViewContainer}
        
        // keyboardVerticalOffset={70}
        
      >

        {/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
          <View style={styles.buttonContainer}>
            <SkipButton
              buttonStyle={styles.SkipButton}
              fontStyle={styles.SkipButtonText}
            />
          </View>
          <View style={styles.ViewContainer}>
            <View style={styles.TitleContainer}>
              <Text style={styles.TitleText}>Tell Us About Yourself</Text>
              <Text style={styles.SmallerText}>
                This will help us provide you with the best experience.
              </Text>
            </View>
            <View style={styles.selectedlistContainer}>
              <Text style={styles.SelectListText}>
                What type of motorcycle do you currently ride?
              </Text>
              <SelectList
                setSelected={(val: string) => setSelected(val)}
                data={motorcycleType}
                save="value"
                fontFamily={fontFamily}
                placeholder="Motorcycle Brand"
                searchPlaceholder="Search Brand"
                boxStyles={styles.boxStyle}
                inputStyles={styles.inputStyles}
                dropdownStyles={styles.boxStyle}
                dropdownTextStyles={styles.inputStyles}
              />
              <View style={styles.selectChildContainer}>
                <Text style={styles.SelectListText}>
                  What type of riding do you mostly enjoy?
                </Text>
                <SelectList
                  setSelected={(val: string) => setrideStyleInput(val)}
                  data={rideStyle}
                  save="value"
                  fontFamily={fontFamily}
                  placeholder="Riding Style"
                  searchPlaceholder="Search Style"
                  boxStyles={styles.boxStyle}
                  inputStyles={styles.inputStyles}
                  dropdownStyles={styles.boxStyle}
                  dropdownTextStyles={styles.inputStyles}
                />
              </View>
              <View style={styles.selectChildContainer}>
                <Text style={styles.SelectListText}>
                  How long have you been riding motorcycles?
                </Text>
                <SelectList
                  setSelected={(val: string) => setrideExperienceInput(val)}
                  data={rideExperience}
                  save="value"
                  fontFamily={fontFamily}
                  placeholder="Riding Experience"
                  boxStyles={styles.boxStyle}
                  inputStyles={styles.inputStyles}
                  dropdownStyles={styles.boxStyle}
                  dropdownTextStyles={styles.inputStyles}
                />
              </View>
              <View style={styles.selectChildContainer}>
                <Text style={styles.SelectListText}>
                How often do you ride?
                </Text>
                <SelectList
                  setSelected={(val: string) => setrideExperienceInput(val)}
                  data={howOften}
                  save="value"
                  fontFamily={fontFamily}
                  placeholder="Riding Routine"
                  boxStyles={styles.boxStyle}
                  inputStyles={styles.inputStyles}
                  dropdownStyles={styles.boxStyle}
                  dropdownTextStyles={styles.inputStyles}
                
                />
              </View>
            </View>
          </View>
        {/* </ScrollView> */}
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
    gap: 20,
  },
  TitleContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  TitleText: {
    color: "white",
    fontSize: 40,
    fontFamily: "Antonio regular",
  },
  SmallerText: {
    fontFamily: "Antonio regular",
    color: "white",
    fontSize: 15,
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
  selectedlistContainer: {
    marginTop: 50,
    width: "80%",
    margin: "auto",
  },
  selectChildContainer: {
    marginTop: 40,
  },
  boxStyle: {
    backgroundColor: "#2f2f2f",
  },
  inputStyles: {
    color: "white",
  },
  SelectListText: {
    color: "white",
    marginBottom: 4,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',  // Ensure content starts at the top of the screen
    paddingBottom: 100,  // Optional padding for a nicer feel when you reach the bottom
  },
  keyboardAvoidingViewContainer: {
    flex: 1,
  },
});

export default SignUpQuestionnaire;
