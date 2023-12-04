import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderPBL_white from '../components/HeaderPBL_while';
import ContentSearch from '../components/ContentSearch';
import ContentHistory from '../components/ContentHistory';

const Search = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#FFFF' }}>
            <HeaderPBL_white />
            <ContentHistory navigation={navigation} />
        </SafeAreaView>
    );
};

export default Search;
