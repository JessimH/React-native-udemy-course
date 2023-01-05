import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hello World! </Text>
      <View>
        <Text style={styles.textStyle}>2eme text</Text>
      </View>
      <Button title="Click me" onPress={() => alert('Hello World!')} />
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
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    color: 'red',
    marginTop: 10,
    padding: 16,
  }
});
