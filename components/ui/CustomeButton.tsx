import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextStyle,
  ViewStyle,
  DimensionValue,
} from "react-native";
type CustomeButtonProps = {
  title: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  onPress?: () => void;
  fontStyle: TextStyle;
  width?: string | number;
};

const CustomeButton: React.FC<CustomeButtonProps> = ({
  title,
  backgroundColor = "#506FFD",
  borderColor = "white",
  borderWidth = 2,
  onPress,
  fontStyle,
  width = "100%",
}) => {
  const buttonStyle = [
    styles.buttonStyle,
    { backgroundColor, borderColor, borderWidth },
  ];
  const containerStyle = [styles.buttonContainer, { width: width as DimensionValue }];

  return (
    <View style={containerStyle}>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={[styles.buttonText, fontStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
export default CustomeButton;
