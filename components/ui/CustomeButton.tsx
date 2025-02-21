import React from "react";
import {  View,StyleSheet, TouchableOpacity,Text,TextStyle } from "react-native";
type CustomeButtonProps = {
    title: string;
    backgroundColor?: string; 
    borderColor?: string;      
    borderWidth?: number;
    onPress?: () => void;
    fontStyle: TextStyle;
};

const CustomeButton:React.FC<CustomeButtonProps> = ({ title,
    backgroundColor = '#506FFD',  
    borderColor = 'white',   
    borderWidth = 2, onPress,fontStyle}) => {
    const buttonStyle = [
        styles.buttonStyle, 
        { backgroundColor, borderColor, borderWidth }
    ];

    return(

        <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={buttonStyle} 
        >
            <Text style={[styles.buttonText,fontStyle]}>{title}</Text>
        </TouchableOpacity>
    </View>
       
    )
};
const styles =StyleSheet.create({
    buttonContainer: {
        width: '80%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white', 
        fontSize: 18,
    }
    
});
export default CustomeButton;