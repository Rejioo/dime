// AddTransactionScreen.js
import React, { useState } from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import styles from "./styles";

const AddTransactionScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const categories = ["Food", "Clothes", "Bills", "Others"];

  const handleAddTransaction = () => {
    // Handle adding transaction logic here
    console.log("Transaction added:", { name, amount, category });

    // After adding transaction, navigate back to HomeScreen
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Add Transaction</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Expense Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter the expense name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Category</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={category}
            style={styles.picker}
            onValueChange={setCategory}
          >
            {categories.map((category, index) => (
              <Picker.Item key={index} label={category} value={category} />
            ))}
          </Picker>
        </View>

        <Button
          onPress={handleAddTransaction}
          title="Add Transaction"
          color="green"
        />
      </View>
    </SafeAreaView>
  );
};

export default AddTransactionScreen;
