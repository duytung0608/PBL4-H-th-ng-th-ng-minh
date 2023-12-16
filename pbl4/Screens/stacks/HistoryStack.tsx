import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeCamera from '../home/HomeCamera';
import HomeItem from '../home/HomeItem';
import History from '../home/History';

const Stack = createNativeStackNavigator();

const HistoryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="History" component={History} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="HomeItem" component={HomeItem} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="HistoryStack" component={HistoryStack} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="HomeCamera" component={HomeCamera} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default HistoryStack;

const styles = StyleSheet.create({});
