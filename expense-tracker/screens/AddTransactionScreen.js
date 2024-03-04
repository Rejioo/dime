// screens/AddTransactionScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddTransactionScreen = ({ navigation, route }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddTransaction = () => {
    const newTransaction = {
      description,
      amount: parseFloat(amount),
    };
    route.params.onAddTransaction(prevTransactions => [...prevTransactions, newTransaction]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>
      <TextInput
        placeholder="Description"
        style={styles.input}
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        placeholder="Amount"
        style={styles.input}
        value={amount}
        onChangeText={text => setAmount(text)}
        keyboardType="numeric"
      />
      <Button
        title="Add"
        onPress={handleAddTransaction}
        icon={<Icon name="plus" size={15} color="white" />}
        buttonStyle={styles.addButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
  },
});

export default AddTransactionScreen;
