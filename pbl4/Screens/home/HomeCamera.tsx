import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import HeaderPBL_white from '../components/HeaderPBL_while';
import ContentHomeCamera from '../components/ContentHomeCamera';

const HomeCamera = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#FFFF' }}>
            <HeaderPBL_white />
            <ContentHomeCamera navigation={navigation} />
        </SafeAreaView>
    );
};

export default HomeCamera;
