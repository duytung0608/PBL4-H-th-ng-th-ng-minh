import { Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Image, TouchableOpacity, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-picker';
import { launchCameraAsync } from 'expo-image-picker';



const ContentSearch = () => {
    const handleIconPress = () => {
        // Xử lý khi biểu tượng được nhấn
        alert('Icon đã được nhấn!');
    };
    const handleTextChange = (text) => {
        setInputValue(text);
    };
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (inputValue === '') {
            setIsFocused(false);
        }
    };
    
    const[img, setImg] = useState('');
    const requsetCameraPermission = async () => {
        try {
            const checkPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
            if(checkPermission === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('oke');
                // Mo camera
                const result = await launchCameraAsync();
                console.log(result.assets[0].uri);
                setImg(result.assets[0].uri);
                // mo thu vien
                // const album:any = await launchImageLibrary({mediaType:'photo'});
                // console.log(album.assets[0].uri);
                // setImg(album.assets[0].uri);
            } else {
                console.log("Tu choi");
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.body}>
            <View style={styles.search_header}>
                <TouchableWithoutFeedback>
                    <TextInput style={styles.search_text} placeholderTextColor='#ABABAB'
                        placeholder={isFocused ? '' : 'Nhập tên loại cây, loại bệnh ...'} // Hiển thị placeholder tùy thuộc vào trạng thái isFocused
                        // ... các thuộc tính khác
                        onChangeText={(text) => setInputValue(text)}
                        multiline={false} // Chỉ cho phép nhập trên 1 dòng
                        numberOfLines={1} // Số dòng tối đa là 1
                        value={inputValue}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </TouchableWithoutFeedback>
                <Icon name="search1" size={30} onPress={handleIconPress} />
            </View>

            <View style={styles.search_list}>
                <View style={styles.search_item}>
                    <Image style={styles.item_img} source={require('../../assets/IMG_PBL/benh_img.jpg')} />
                    <View style={styles.item_content}>
                        <Text style={styles.content_header}>Cây lúa</Text>
                        <View style={styles.content_body}>
                            <Text style={styles.body_lb}>Loại bệnh: </Text>
                            <Text style={styles.body_value}>La ua vang</Text>
                        </View>
                        <View style={styles.content_body}>
                            <Text style={styles.body_lb}>Nguyên nhân: </Text>
                            <Text style={styles.body_value}>La ua vang do sâu bệnh</Text>
                        </View>
                        <View style={styles.content_body}>
                            <Text style={styles.body_lb}>Giải pháp: </Text>
                            <Text style={styles.body_value}>La ua vang do sâu bệnh</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.search_item}>
                    <Image style={styles.item_img} source={require('../../assets/IMG_PBL/benh_img.jpg')} />
                    <View style={styles.item_content}>
                        <Text style={styles.content_header}>Cây lúa</Text>
                        <View style={styles.content_body}>
                            <Text style={styles.body_lb}>Loại bệnh: </Text>
                            <Text style={styles.body_value}>La ua vang</Text>
                        </View>
                        <View style={styles.content_body}>
                            <Text style={styles.body_lb}>Nguyên nhân: </Text>
                            <Text style={styles.body_value}>La ua vang do sâu bệnh</Text>
                        </View>
                        <View style={styles.content_body}>
                            <Text style={styles.body_lb}>Giải pháp: </Text>
                            <Text style={styles.body_value}>La ua vang do sâu bệnh</Text>
                        </View>
                    </View>
                </View>
                
            </View>

            <Icons style={styles.btn_search} name="add-circle" size={80} 
                onPress={() => requsetCameraPermission()}/>

            {img != '' ? <Image source={{uri:img}} style={{width: 250, height: 200}}/> : ''}
        </View>
    )
}

export default ContentSearch

const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingTop: 10,
    },
    search_header: {
        flexDirection: 'row',
        width: "90%",
        backgroundColor: '#E0DEDE',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
        justifyContent: 'space-between'
    },

    search_text: {
        marginLeft: 10,
        fontSize: 17,
        color: '#00000',
        width: '80%'
    },
    search_list: {
        marginVertical: 10,
        width: '90%'
    },
    search_item: {
        backgroundColor: '#ECE2F6',
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'flex-start',
        marginTop: 10,

    },
    item_img: {
        width: 100,
        height: 100,
        borderRadius: 10,

    },

    item_content: {
        marginLeft: 10,
        flexDirection: 'column',
    },
    content_header: {
        fontSize: 20,
        fontWeight: '600',
        color: '#15504A',

    },
    content_body: {
        flexDirection: 'row',
        marginTop: 5,
        width: 200,
        flexWrap: 'wrap',
    },
    body_lb: {
        fontSize: 16,
        color: '#15504A',

    },
    body_value: {
        fontWeight: '600',
        fontSize: 16,
        color: '#15504A',

    },
    btn_search: {
       color: '#50D2C2',
        position: 'absolute',
        right: '10%',
        top: '100%',
    },

});

function launchCamera(arg0: { mediaType: string; cameraType: string }) {
    throw new Error('Function not implemented.')
}
