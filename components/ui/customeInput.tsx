import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

type CustomeInputProps = {
  value: string;
  setValue: (text: string) => void;
  placeholder: string;
  secureTextEntry: boolean;
  imageSource: any;
};

const CustomeInput: React.FC<CustomeInputProps> = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  imageSource,
}) => {
  return (
    <View style={styles.ViewContainer}>
      <View style={styles.ViewChild}>
        <Image style={styles.Image} source={imageSource} />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ViewContainer: {
    height: 50,
    width: "70%",
    marginTop: 50,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  ViewChild: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  Image: {
    width: 15,
    height: 15,
  },
  input: {
    height: "100%",
    width: "80%",
    marginLeft: 10,
    fontSize: 15,
    color: "white",
  },
});

export default CustomeInput;
