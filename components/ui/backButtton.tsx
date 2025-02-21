import React from "react";
import { View,StyleSheet,TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


const BackButton: React.FC=()=>{
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.goBack();
    };
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Image style={styles.icon} source={require('../../assets/images/left.png')}/>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container:{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        width:30,
        height:30,
    }
});
export default BackButton;