import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import ContentHomeItem from '../components/ContentHomeItem';

const HomeItem = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#FFFF' }}>
            {/* <HeaderPBL_white /> */}
            <ContentHomeItem navigation={navigation} />
        </SafeAreaView>
    );
};

export default HomeItem;
