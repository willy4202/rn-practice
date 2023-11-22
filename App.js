import { useState } from "react";
import { Alert, Button, FlatList } from "react-native";
import { StyleSheet, View } from "react-native";
import GoalItem from "./components/Goal/GoalItem";
import GoalInput from "./components/Goal/GoalInput";
import { theme } from "./styles/theme";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalVisable, setModalVisable] = useState(false);
  const [goals, setGoals] = useState([]);

  const addGoalHanlder = (enteredGoal) => {
    setGoals((prev) => [
      ...prev,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    closeModalHandler();
  };

  const deleteGoalHanlder = (id) => {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  };

  const modalHandler = () => {
    setModalVisable(true);
  };
  const closeModalHandler = () => {
    setModalVisable(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="새로운 목표 추가"
          color={theme.primary_100}
          onPress={modalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHanlder}
          visable={modalVisable}
          closeModal={closeModalHandler}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 56,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
