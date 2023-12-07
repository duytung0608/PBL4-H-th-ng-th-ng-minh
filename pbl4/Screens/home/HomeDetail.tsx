import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import ContentHomeDetail from '../components/ContentHomeDetail';

const HomeDetail = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#FFFF' }}>
            {/* <HeaderPBL_white /> */}
            <ContentHomeDetail navigation={navigation} />
        </SafeAreaView>
    );
};

export default HomeDetail;
