import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import NewGoalInput from "./components/NewGoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    // alert(enteredGoalText);
    // setCourseGoals([...courseGoals,enteredGoalText]);
    // Best way to update any state in array is below:
    setCourseGoals((currrentCourseGoals) => [
      ...currrentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  function addInputTextHandler(enteredInputTextGoal) {
    setCourseGoals((currrentCourseGoals) => [
      ...currrentCourseGoals,
      { text: enteredInputTextGoal, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    console.log("ITEM DELETED!!!");
    setCourseGoals((currrentCourseGoals) => {
      return currrentCourseGoals.filter((goal) => goal.id != id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
    backgroundColor: "grey",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
