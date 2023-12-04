import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HeaderPBL_white from '../components/HeaderPBL_while';
import ContentSignIn from '../components/ContentSignIn';

const SignIn = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.body}>
            <HeaderPBL_white />
            <ContentSignIn title="Sign In" navigation={navigation} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFF',
        height: '100%',
    },
});

export default SignIn;
