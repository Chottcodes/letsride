import {Image,StyleSheet,Platform,Text,View,StatusBar,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useFonts} from "expo-font";

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    'Antonio Bold': require('../../assets/fonts/Antonio-Bold.ttf'),
    'Antonio regular': require('../../assets/fonts/Antonio-Regular.ttf')
  });
  const fontFamily = fontsLoaded ? 'Antonio regular' : 'Arial,sans-serif';


  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.viewContainer}>
        <Image
          source={require("../../assets/images/LetsRide.png")}
          style={styles.headerImage}
        />
        <Text style={[styles.text,{fontFamily}]}>Connecting Riders, One Mile At A Time</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeAreaContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  viewContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    alignItems: "center",
  },
  headerImage: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
 text:{
    fontFamily:"Antonio regular",
    fontSize: 15,
    textAlign: "center",
    width:'80%',
    color:"white",
  }
});
