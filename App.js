import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/screens/Login';
import Register from './components/screens/Register';
import Home from './components/screens/Home';
import ProductInfo from './components/screens/ProductInfo';
import MyCar from './components/screens/MyCar';
import * as React from 'react';


const App = () =>{

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Login"> */}
      <Stack.Navigator screenOptions = {{
          headerShown : false,
          }}
          initialRouteName="Login">
        <Stack.Screen name = "Login" component = {Login} />
        <Stack.Screen name = "Register" component = {Register} />
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name = "MyCar" component = {MyCar} />
        <Stack.Screen name = "ProductInfo" component = {ProductInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;