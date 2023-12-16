import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

interface DataObject {
    cause: string;
    disease: string;
    id: string;
    name: string;
    solution: string;
}
const ContentHomeDetail = ({ navigation, route }: any) => {
    const [cause, setCause] = useState('');
    const [disease, setDisease] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [solution, setSolution] = useState('');

    const [image, setImage] = useState('');
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('dulieu');

            if (value !== null) {
                const parsedData = JSON.parse(value);
                setImage(parsedData.img);
                setCause(parsedData.cause);
                setDisease(parsedData.disease);
                setId(parsedData.id);
                setSolution(parsedData.solution);
                setName(parsedData.name);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
        console.log('oke lay duoc data');
    }, []);
    let formData = {
        name: name,
        avatar: image,
        disease: disease,
        cause: cause,
        solution: solution,
        id: id,
    };

    const save = () => {
        axios
            .post('https://6570239c09586eff6640c60f.mockapi.io/forecast', formData)
            .then((response) => {
                if (response.data) {
                    navigation.navigate('History');
                } else {
                    alert('Luu lich su chua thanh cong');
                }
            })
            .catch((error) => console.error(error));
    };
    return (
        <View style={styles.container}>
            <View style={styles.header_lb}>
                <Text style={styles.title}>{name}</Text>
            </View>
            <View>
                <Image style={styles.content_img} source={{ uri: image }} />
            </View>
            <ScrollView></ScrollView>
            <View style={styles.content}>
                <ScrollView style={{ height: '80%' }}>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lb}>Loại bệnh:</Text>
                        <Text style={styles.content_item_title}>{disease}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lb}>Nguyên nhân:</Text>
                        <Text style={styles.content_item_title}>{cause}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lb}>Giải pháp:</Text>
                        <Text style={styles.content_item_title}>{solution}</Text>
                    </View>
                </ScrollView>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={save}>
                    <Text style={styles.btnText}>Lưu</Text>
                </TouchableOpacity>
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
        width: '75%',
        height: 370,
        backgroundColor: '#E2EDF6',
        borderRadius: 10,
        marginBottom: 20,
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
    button: {
        width: 100,
        height: 56,
        borderRadius: 50,
        backgroundColor: '#A3D2B1',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
        marginBottom: 20,
    },
    btnText: {
        fontSize: 25,
        fontWeight: '500',
    },
});
export default ContentHomeDetail;
