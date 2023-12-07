import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeCamera from '../home/HomeCamera';
import HomeDetail from '../home/HomeDetail';

const Stack = createNativeStackNavigator();

const CameraStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeCamera" component={HomeCamera} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="HomeDetail" component={HomeDetail} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default CameraStack;

const styles = StyleSheet.create({});
