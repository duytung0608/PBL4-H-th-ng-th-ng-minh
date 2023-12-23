import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import SingIn from './SignIn';
import CreateAccount from './CreateAccount';
import HomeCamera from './HomeCamera';
import History from './History';
import Profile from './Profile';
import HomeDetail from './HomeDetail';
import HomeItem from './HomeItem';

const Stack = createNativeStackNavigator();

const NavicationApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                ></Stack.Screen>
                <Stack.Screen name="SingIn" component={SingIn} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                    name="CreateAccount"
                    component={CreateAccount}
                    options={{ headerShown: false }}
                ></Stack.Screen>
                <Stack.Screen name="HomeCamera" component={HomeCamera} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="History" component={History} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="HomeDetail" component={HomeDetail} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="HomeItem" component={HomeItem} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavicationApp;

const styles = StyleSheet.create({});
