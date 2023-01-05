import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals(currentGoals => [...currentGoals, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      {/* INPUT AREA */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='your first goal'
          style={styles.textInput}
          onChangeText={goalInputHandler} />
        <Button title='add goal' onPress={addGoalHandler} />
      </View>

      {/* LIST AREA */}
      <View style={styles.goalsContainer}>
        {goals.map((goal, index) => <Text key={index}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 12,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  }

});
