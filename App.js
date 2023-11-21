import { useState } from "react";
import { Button, FlatList, ScrollView, TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [enteredGoal, setenteredGoal] = useState();
  const [goals, setGoals] = useState([]);

  const goalInputHanlder = (enteredText) => {
    setenteredGoal(enteredText);
  };
  const addGoalHanlder = () => {
    setGoals((prev) => [
      ...prev,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setenteredGoal("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="목표를 적으세요"
          onChangeText={goalInputHanlder}
          value={enteredGoal}
        />
        <Button title="목표 추가" onPress={addGoalHanlder} />
      </View>
      <View style={styles.goalsContainer}>
        {/* Rn에선 스타일 상속이 이뤄지지 않음, View와 Text가 별개기 때문에 
        View에 color를 적용해도 하위 Text엔 적용되지 않음 */}

        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{item.text}</Text>
            </View>
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
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
