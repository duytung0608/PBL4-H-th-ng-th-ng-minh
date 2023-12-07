import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeCamera from '../home/HomeCamera';
import HomeItem from '../home/HomeItem';
import Search from '../home/Search';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="HomeItem" component={HomeItem} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default SearchStack;

const styles = StyleSheet.create({});
