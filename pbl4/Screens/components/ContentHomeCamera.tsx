import { StyleSheet, Text, View, Image, TouchableOpacity, PermissionsAndroid } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import { Camera } from 'expo-camera';

const ContentHomeCamera = () => {
    const [img, setImg] = useState('');
    const requsetCameraPermission = async () => {
        try {
            const { status } = await Camera.requestPermissionsAsync();
            if (status === 'granted') {
                // Nếu đã có quyền truy cập, mở camera
                const result = await launchCameraAsync();
                console.log(result.assets[0].uri);
                setImg(result.assets[0].uri);
            } else {
                // Nếu chưa có quyền truy cập, thông báo yêu cầu quyền
                alert('Camera permission denied. Please enable camera access in your device settings.');
            }
            // Mo camera
            // const result = await launchCameraAsync();
            // console.log(result.assets[0].uri);
            // setImg(result.assets[0].uri);
        } catch (error) {
            console.log(error);
        }
    };
    const requesAlbumPermission = async () => {
        try {
            // mo thu vien
            const album: any = await launchImageLibraryAsync();
            console.log(album.assets[0].uri);
            setImg(album.assets[0].uri);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.body}>
            {img != '' ? (
                <Image source={{ uri: img }} style={styles.img} />
            ) : (
                <Image style={styles.img} source={require('../../assets/IMG_PBL/benh_img.jpg')} />
            )}

            <TouchableOpacity style={styles.content} onPress={() => alert('Chuyển sang trang homeItem')}>
                <Text style={styles.content_lb}>Tra cứu</Text>
            </TouchableOpacity>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btn_album} onPress={() => requesAlbumPermission()}>
                    <Icon style={styles.btn_icon} name="photograph" size={55} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_camera} onPress={() => requsetCameraPermission()}>
                    <Icon style={styles.btn_icon} name="camera" size={50} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ContentHomeCamera;

const styles = StyleSheet.create({
    body: {
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFF',
    },
    img: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    content: {
        marginVertical: 10,
        width: '50%',
        height: 50,
        backgroundColor: '#A3D2B1',
        borderRadius: 10,
    },
    content_lb: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 3,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 40,
    },
    btn_camera: {
        width: 75,
        height: 75,
        borderWidth: 3,
        borderColor: '#15504A',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#E2EDF6',
    },
    btn_album: {
        width: 75,
        height: 75,
        borderWidth: 3,
        borderColor: '#15504A',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#E2EDF6',
    },
    btn_icon: {
        color: '#15504A',
    },
});
