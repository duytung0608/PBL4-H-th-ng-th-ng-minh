import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import HeaderPBL from "../components/HeaderPBL_while";
import { StatusBar } from "expo-status-bar";
import ContentPBL from "../components/ContentPBL";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const LoginScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.body} >
                <HeaderPBL />
                <ContentPBL navigation={navigation} />
            </SafeAreaView>
        
        </>
    );
};

const styles = StyleSheet.create({
    body: {
        //   paddingVertical: 40,  // padding top + bottom
        //   paddingHorizontal: 5, // padding left + right
        backgroundColor: '#F4F4F4',
    },
    itemTxt: {
        fontSize: 20,
        fontWeight: '500',
        color: 'green',
    }

});

export default LoginScreen;