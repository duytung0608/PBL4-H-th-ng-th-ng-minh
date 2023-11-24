import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeItem from './Screens/home/HomeItem';
import LoginScreen from './Screens/home/LoginScreen';
import Search from './Screens/home/Search';
import History from './Screens/home/History';
import Profile from './Screens/home/Profile';
import HomeCamera from './Screens/home/HomeCamera';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name='HomeItem' component={HomeItem} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer> */}

      {/* <Profile /> */}
      {/* <History /> */}
      {/* <Search /> */}
      <HomeCamera />
      {/* <HomeItem /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
