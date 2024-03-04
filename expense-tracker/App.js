// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Expense Tracker' }}
        />
        <Stack.Screen
          name="AddTransaction"
          component={AddTransactionScreen}
          options={{ title: 'Add Transaction' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
