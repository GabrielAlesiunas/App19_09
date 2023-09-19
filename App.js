import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('3mJ0ooAXy67tAFwraZp1aR0d8HQ7r5uyf9y1s4Yh','ZfRlC1mjVqX0Bx5lAfj6qoVbTpp9YjeCv19CGRTQ');
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
