import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { theme } from "../../styles/theme";

const GoalInput = ({ onAddGoal, visable, closeModal }) => {
  const [enteredGoal, setenteredGoal] = useState();

  const goalInputHanlder = (enteredText) => {
    setenteredGoal(enteredText);
  };

  const addGoalHanlder = () => {
    onAddGoal(enteredGoal);
    setenteredGoal("");
  };

  console.log(theme);
  return (
    <Modal visible={visable} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="목표를 적으세요"
          onChangeText={goalInputHanlder}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHanlder} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    backgroundColor: theme.primary_140,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  textInput: {
    borderColor: theme.gray_100,
    borderWidth: 1,
    width: "100%",
    padding: 8,
    marginBottom: 8,
    color: theme["Solid/white"],
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
