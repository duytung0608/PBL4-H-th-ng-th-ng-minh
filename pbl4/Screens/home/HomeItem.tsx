import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderPBL_white from '../components/HeaderPBL_while'
import ContentHomeItem from '../components/ContentHomeItem'


const HomeItem = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#FFFF'}}>
            <HeaderPBL_white />
            <ContentHomeItem />
        </SafeAreaView>
    )
}


export default HomeItem
