import React from "react";
import { View, StyleSheet, Text,Image } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomeScreen from "@/components/ui/customeScreen";
import SkipButton from "@/components/ui/skipButton";
import { useFonts } from "expo-font";

const SignUpQuestionnaire = () => {
    let [fontsLoaded] = useFonts({
        "Antonio Bold": require("../../assets/fonts/Antonio-Bold.ttf"),
        "Antonio regular": require("../../assets/fonts/Antonio-Regular.ttf"),
      });
      const fontFamily = fontsLoaded ? "Antonio regular" : "Arial,sans-serif";
  const [selected, setSelected] = React.useState<string>("");
  const data = [
    { key: "1", value: "Harley-Davidson" },
    { key: "2", value: "Kawasaki" },
    { key: "3", value: "Yamaha" },
    { key: "4", value: "Honda"},
    { key: "5", value: "Ducati" },
    { key: "6", value: "Suzuki" },
    { key: "7", value: "BMW" },
    { key: "8", value: "Triumph" },
    { key: "9", value: "Indian" },
    { key: "10", value: "Other" },
  ];
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <StatusBar backgroundColor="black" style="light" />
          <View style={styles.buttonContainer}>
        <SkipButton
            buttonStyle={styles.SkipButton}
            fontStyle={styles.SkipButtonText}
          /></View>

      <CustomeScreen Style={styles.ViewContainer} number={50}>
        <View style={styles.TitleContainer}>
            <Text style={styles.TitleText}>Tell Us About Yourself</Text>
            <Text style={styles.SmallerText}>This will helps us propvide you with the best experience</Text>
        </View>
        <SelectList 
        setSelected={(val:string) => setSelected(val)} 
        data={data} 
        save="value"
        fontFamily={fontFamily}
        placeholder="Motorcycle Brand"
        searchPlaceholder="Search Brand"
        boxStyles={styles.boxStyle}
        inputStyles={styles.inputStyles}
        dropdownStyles={styles.boxStyle}
        dropdownTextStyles={styles.inputStyles}
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
    gap: 20,
  },TitleContainer:{
    marginTop: 20,
    alignItems: "center",
  },
  TitleText: {
    color: "white",
    fontSize: 40,
    fontFamily: "Antonio regular",
  },SmallerText:{
    fontFamily: "Antonio regular",
    color: "white",
    fontSize:15,
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
  boxStyle: {
    backgroundColor:"#2f2f2f",
},inputStyles:{
    color:'white'
}
});
export default SignUpQuestionnaire;
