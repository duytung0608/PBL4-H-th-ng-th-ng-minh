import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContentHomeItem = ({ navigation }: any) => {
    const [data, setData] = useState({
        avatar: '',
        cause: '',
        disease: '',
        id: '',
        name: '',
        solution: '',
    });
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('dulieu');

            if (value !== null) {
                const parsedData = JSON.parse(value);
                setData(parsedData);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
        console.log('oke lay duoc data');
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header_lb}>
                <Text style={styles.title}>{data.name}</Text>
            </View>
            <View>
                <Image style={styles.content_img} source={{ uri: data.avatar }} />
            </View>

            <View style={styles.content}>
                <ScrollView style={{ height: '80%' }}>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lb}>Loại bệnh:</Text>
                        <Text style={styles.content_item_title}>{data.disease}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lb}>Nguyên nhân:</Text>
                        <Text style={styles.content_item_title}>{data.cause}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lb}>Giải pháp:</Text>
                        <Text style={styles.content_item_title}>{data.solution}</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFF',
    },
    header_lb: {
        width: '65%',
        height: 50,
        marginVertical: 10,
        backgroundColor: '#A3D2B1',
        borderRadius: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        textAlign: 'center',
        color: '#15504A',
    },

    content_img: {
        borderRadius: 10,
        marginBottom: 10,
        width: 256,
        height: 256,
    },

    content: {
        width: '65%',
        height: '50%',
        backgroundColor: '#E2EDF6',
        borderRadius: 10,
        marginBottom: 30,
    },

    content_item: {
        marginVertical: 5,
        marginHorizontal: 10,
    },
    content_item_lb: {
        fontSize: 20,
    },

    content_item_title: {
        fontSize: 22,
        fontWeight: '500',
        marginLeft: 15,
    },
});
export default ContentHomeItem;
