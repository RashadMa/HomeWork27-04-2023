import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import AddUser from "./components/AddUser";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.welcoming}>Welcome to Bla bla</Text>
        </View>
        <AddUser />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  welcoming: {
    fontSize: 25,
    marginVertical: 15,
  },
});
