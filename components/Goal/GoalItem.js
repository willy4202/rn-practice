import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

const GoalItem = ({ onDeleteGoal, item }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: theme.primary_140 }}
        onPress={onDeleteGoal.bind(this, item.id)}
        style={({ pressed }) => pressed && styles.presedStyle}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: theme.primary_80,
  },

  presedStyle: {
    opacity: 0.5,
  },
  goalText: {
    color: theme["Solid/white"],
    padding: 8,
  },
});
