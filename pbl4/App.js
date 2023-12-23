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
import { NavigationContainer } from '@react-navigation/native';
import CreateAccount from './Screens/home/CreateAccount';
import SignIn from './Screens/home/SignIn';
import BottomTabs from './Screens/home/BottomTabs';
import NavicationApp from './Screens/home/NavicationApp';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
                    <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                    <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>

            {/* <Profile /> */}
            {/* <History /> */}
            {/* <Search /> */}
            {/* <HomeCamera /> */}
            {/* <HomeItem /> */}
            {/* <LoginScreen /> */}
            {/* <View style={styles.app}>
            <NavicationApp />
        </View> */}
        </>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#FFFF',
    },
});
