import { StyleSheet, Text, View, Image, TouchableOpacity, PermissionsAndroid } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import { Camera } from 'expo-camera';
import axios from 'axios';
// import { RNFS } from 'react-native-fs';

// import RNFetchBlob from 'react-native-fetch-blob';
const ContentHomeCamera = ({ navigation }) => {
    const [base64, setBase64] = useState('');
    const [img, setImg] = useState('');
    const requsetCameraPermission = async () => {
        try {
            const { status } = await Camera.requestPermissionsAsync();
            if (status === 'granted') {
                // Nếu đã có quyền truy cập, mở camera
                const result: any = await launchCameraAsync();
                setBase64(result.assets[0]);
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
            setBase64(album.assets[0]);
            setImg(album.assets[0].uri);
        } catch (error) {
            console.log(error);
        }
    };

    // // chuyển ảnh sang base64Image  => bị lỗi
    // const getImageBase64 = async (img) => {
    //     const response = await RNFetchBlob.fetch('GET', img);
    //     const base64Image = response.base64();
    //     return base64Image;
    // };

    const uploadImage = async (img) => {
        try {
            // Tạo đối tượng FormData để chứa dữ liệu
            const formData = new FormData();
            // Chuyển đổi đường link ảnh sang base64
            // const base64Image = await getImageBase64(img);
            // Thêm ảnh vào FormData
            formData.append('image', {
                uri: img,
                type: 'image/jpeg', // hoặc 'image/png' tùy vào định dạng của ảnh
                name: 'photo.jpg',
            } as any); // Sử dụng 'as any' để bypass lỗi kiểu dữ liệu

            // Sử dụng Axios để thực hiện HTTP request
            const response = await axios.post(
                'https://968f-42-116-78-238.ngrok-free.app/index1',
                img,
                // { image: base64Image }
                {
                    headers: {
                        'Content-Type': 'application/json',
                        // Các header khác nếu cần
                    },
                }
            );

            // Kiểm tra và xử lý response từ server
            if (response.status === 200) {
                console.log('Upload success:', response.data);
                // Hiển thị kết quả từ server hoặc chuyển đến trang khác tùy thuộc vào logic của bạn
                // Ví dụ:
                setImg(img); // Hiển thị ảnh đã chọn
                alert('Kết quả từ server: ' + response.data);
                navigation.navigate('HomeDetail', { img, result: response.data });
            } else {
                console.error('Upload failed:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during image upload:', error);
        }
    };
    return (
        <View style={styles.body}>
            {img != '' ? (
                <Image source={{ uri: img }} style={styles.img} />
            ) : (
                <Image style={styles.img} source={require('../../assets/IMG_PBL/benh_img.jpg')} />
            )}

            <TouchableOpacity style={styles.content} onPress={() => uploadImage(img)}>
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
        marginBottom: 300,
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
