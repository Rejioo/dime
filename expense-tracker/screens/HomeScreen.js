// screens/HomeScreen.js

import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]);

  const renderTransaction = ({ item }) => (
    <View style={styles.transaction}>
      <Text style={styles.transactionText}>{item.description}: ${item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Add Transaction"
        onPress={() => navigation.navigate('AddTransaction', { onAddTransaction: setTransactions })}
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
  transaction: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionText: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: 'blue',
    marginTop: 20,
  },
});

export default HomeScreen;
