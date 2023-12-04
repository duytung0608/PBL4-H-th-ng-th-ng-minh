import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const HeaderPBL_white = () => {
    return (
        <>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image style={styles.deslogo} source={require('../../assets/IMG_PBL/logo_90_150_da_mau.png')} />
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={styles.destitle}>CAUSE</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFF',
        // marginTop: 20,
    },

    logo: {
        width: '40%',
    },
    deslogo: {
        width: '100%',
    },
    destitle: {
        fontSize: 50,
        fontWeight: '600',
        color: '#15504A',
    },
});

export default HeaderPBL_white;
