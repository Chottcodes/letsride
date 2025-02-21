import React from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ScrollView,
} from "react-native";
type Props = {
  Style: object,
  number: number,
  children: React.ReactNode,
};

const CustomeScreen: React.FC<Props> = ({ Style,number,children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingViewContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={number}
      >
        {children}
        <ScrollView contentContainerStyle={Style}></ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  keyboardAvoidingViewContainer: {
    flex: 1,
  },
});
export default CustomeScreen;
