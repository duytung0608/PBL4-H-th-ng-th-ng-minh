import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderPBL_white from '../components/HeaderPBL_while';
import ContentSearch from '../components/ContentSearch';
import ContentProfile from '../components/ContentProfile';

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#FFFF' }}>
            <HeaderPBL_white />
            <ContentProfile navigation={navigation} />
        </SafeAreaView>
    );
};

export default Profile;
