import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import HeaderPBL_white from "../components/HeaderPBL_while";
import ContentCreateAccount from "../components/ContentCreateAccount";

const CreateAccount = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.body}>
            <HeaderPBL_white />
            <ContentCreateAccount title="Create Account" navigation={navigation} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFF',
        height: '100%',
    }
});

export default CreateAccount;