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

  return (
    <Modal visible={visable} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="write your Goal"
          onChangeText={goalInputHanlder}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={closeModal}
              color={theme.salamander}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHanlder}
              color={theme.secondary_100}
            />
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
    backgroundColor: theme.primary_120,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  textInput: {
    borderColor: theme.gray_80,
    borderWidth: 1,
    width: "100%",
    padding: 12,
    marginBottom: 8,
    borderColor: theme.primary_10,
    backgroundColor: theme.primary_10,
    borderRadius: 8,
    color: theme.gray_10,
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
