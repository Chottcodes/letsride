import React from "react";
import { TouchableOpacity, View,Text } from "react-native";
type SkipButtonProps = {
    buttonStyle: any,
    fontStyle: any,
    onPress?: () => void;
}

const SkipButton:React.FC<SkipButtonProps> = ({buttonStyle,fontStyle,onPress}) => {
    return (
        <View style={buttonStyle}>
            <TouchableOpacity>
                <Text style={fontStyle}>Skip</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SkipButton;