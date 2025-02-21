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
  index?: number | number[],
};

const CustomeScreen: React.FC<Props> = ({ Style,number,children,index}) => {
  const stickyIndices = Array.isArray(index) ? index : index != null ? [index] : [];
  return (
    <KeyboardAvoidingView
        style={styles.keyboardAvoidingViewContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={number}
      >
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView contentContainerStyle={Style} stickyHeaderIndices={stickyIndices}>
        {children}

        </ScrollView>
    </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  keyboardAvoidingViewContainer: {
    flex: 1,
  },
});
export default CustomeScreen;
