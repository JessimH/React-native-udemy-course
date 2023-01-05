import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setGoals(currentGoals => [...currentGoals,
    { text: enteredGoalText, id: Math.random().toString() }]);
  }

  function deleteGoalHandler() {
    console.log('delete goal');
  }

  return (
    <View style={styles.appContainer}>
      {/* INPUT AREA */}
      <GoalInput
        addGoalHandler={addGoalHandler}
      />

      {/* LIST AREA */}
      <View style={styles.goalsContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
          {goals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          )
          )}
        </ScrollView> */}

        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          keyExtractor={(itemData, index) => itemData.id}
          renderItem={itemData => {
            return (
              <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
            )
          }} />
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

  goalsContainer: {
    flex: 5,
  },
});
