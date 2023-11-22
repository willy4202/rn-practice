import { useState } from "react";
import { Alert, FlatList } from "react-native";
import { StyleSheet, View } from "react-native";
import GoalItem from "./components/Goal/GoalItem";
import GoalInput from "./components/Goal/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHanlder = (enteredGoal) => {
    setGoals((prev) => [
      ...prev,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHanlder = (id) => {
    Alert.alert(id);
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHanlder} />
      <View style={styles.goalsContainer}>
        {/* Rn에선 스타일 상속이 이뤄지지 않음, View와 Text가 별개기 때문에 
        View에 color를 적용해도 하위 Text엔 적용되지 않음 */}

        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <GoalItem onDeleteGoal={deleteGoalHanlder} item={item} />
          )}
          keyExtractor={(item) => {
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
    paddingTop: 56,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
