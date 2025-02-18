import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.viewContainer}>
        <Image source={require("../../assets/images/LetsRide.png")} style={styles.headerImage} />
        <Text style={styles.titleContainer}>Nice!!!!!</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeAreaContainer: {
    flex: 1,
    backgroundColor: "black",
  },viewContainer: {
    backgroundColor:"white",
    flex: 1,
  },
  headerImage: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 20,
    color: "black",
    fontSize: 24,
  },
});
