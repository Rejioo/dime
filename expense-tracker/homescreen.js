// HomeScreen.js
import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import styles from "./styles";
import ExpenseComponent from "./ExpenseComponent";

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [expenses, setExpenses] = useState([]);
  const categories = ["Food", "Clothes", "Bills", "Others"];
  const [addForm, setAddForm] = useState(false);

  const addExpense = () => {
    setAddForm(true);
  };

  const [chartData, setChartData] = useState([
    {
      name: "Food",
      amount: 0,
      color: "#e62d20",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Clothes",
      amount: 0,
      color: "#27e620",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Bills",
      amount: 0,
      color: "#1c6bd9",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Others",
      amount: 0,
      color: "#5adbac",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>Welcome to GeeksforGeeks</Text>
      <Text style={styles.heading2}>Expense Tracker using React-Native</Text>

      <PieChart
        data={chartData}
        width={300}
        height={200}
        chartConfig={{
          backgroundGradientFrom: "#1E2923",
          backgroundGradientTo: "#08130D",
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        }}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />

      {addForm == true ? (
        <Addform
          name={name}
          setName={setName}
          amount={amount}
          setAmount={setAmount}
          category={category}
          setCategory={setCategory}
          categories={categories}
          setExpenses={setExpenses}
          expenses={expenses}
          chartData={chartData}
          setChartData={setChartData}
          setAddForm={setAddForm}
        />
      ) : (
        <View style={styles.row}>
          <Button
            onPress={addExpense}
            color="green"
            style={styles.addButton}
            title="Add Expense"
          />
        </View>
      )}

      <ExpenseComponent
        expenses={expenses}
        setExpenses={setExpenses}
        chartData={chartData}
        setChartData={setChartData}
      />

      <View style={styles.navigationButtons}>
        <Button
          title="Add Transaction"
          onPress={() => navigation.navigate("AddTransaction")}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
