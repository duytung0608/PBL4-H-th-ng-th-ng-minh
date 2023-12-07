import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeCamera from '../home/HomeCamera';
import HomeItem from '../home/HomeItem';
import Search from '../home/Search';
import Profile from '../home/Profile';
import SignIn from '../home/SignIn';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default ProfileStack;

const styles = StyleSheet.create({});
