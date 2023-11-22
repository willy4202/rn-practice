import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setenteredGoal] = useState();

  const goalInputHanlder = (enteredText) => {
    setenteredGoal(enteredText);
  };

  const addGoalHanlder = () => {
    onAddGoal(enteredGoal);
    setenteredGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="목표를 적으세요"
        onChangeText={goalInputHanlder}
        value={enteredGoal}
      />
      <Button title="목표 추가" onPress={addGoalHanlder} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
