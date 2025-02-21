import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomeScreen from "@/components/ui/customeScreen";
import SkipButton from "@/components/ui/skipButton";

const SignUpQuestionnaire = () => {
  const [selected, setSelected] = React.useState<string>("");
  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <StatusBar backgroundColor="black" style="light" />
      <CustomeScreen Style={styles.ViewContainer} number={50} index={0}>
        <View style={styles.buttonContainer}>
          <SkipButton
            buttonStyle={styles.SkipButton}
            fontStyle={styles.SkipButtonText}
          />
        </View>
        <SelectList 
        setSelected={(val:string) => setSelected(val)} 
        data={data} 
        save="value"
    />
      </CustomeScreen>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  ViewContainer: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "blue",
  },
  TextContainer: {
    color: "white",
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "red",
    alignItems: "flex-end",
  },
  SkipButton: {
    width: 60,
    height: 20,
    justifyContent: "center",
  },
  SkipButtonText: {
    color: "white",
    fontSize: 15,
  },
});
export default SignUpQuestionnaire;
