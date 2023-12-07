import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Image,
    TouchableOpacity,
    PermissionsAndroid,
    ScrollView,
    FlatList,
    Alert,
    ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import { launchCameraAsync } from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ContentSearch = ({ navigation }) => {
    const showdetail = async (item) => {
        try {
            await AsyncStorage.setItem('dulieu', JSON.stringify(item));
            navigation.navigate('HomeItem');
        } catch (error) {
            console.log(error);
        }
    };
    const handleIconPress = () => {
        // Xử lý khi biểu tượng được nhấn
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

    const [img, setImg] = useState('');
    const requsetCameraPermission = async () => {
        try {
            const checkPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
            if (checkPermission === PermissionsAndroid.RESULTS.GRANTED) {
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
                console.log('Tu choi');
            }
        } catch (error) {
            console.log(error);
        }
    };
    // gọi API
    const [forecast, setForecast] = useState([]);
    const [isLoading, setLoading] = useState(true);
    //Cach 1
    // const getAPI = () => {
    //     return fetch('https://6570239c09586eff6640c60f.mockapi.io/forecast')
    //         .then((respone) => respone.json())
    //         .then((data) => setForecast(data))
    //         .catch((err) => console.log(err));
    // };

    const getAPI = async () => {
        try {
            const respone = await fetch('https://6570239c09586eff6640c60f.mockapi.io/forecast');
            const data = await respone.json();
            setForecast(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getAPI();
    }, []);

    const goCamera = () => {
        navigation.navigate('Home');
    };

    // Hàm search
    const [searchText, setSearchText] = useState('');
    const SearchForecast = forecast.filter((item) => {
        // Kiểm tra nếu tên sự kiện hoặc thông tin khác chứa giá trị đang được nhập
        return (
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.disease.toLowerCase().includes(searchText.toLowerCase()) ||
            item.cause.toLowerCase().includes(searchText.toLowerCase()) ||
            item.solution.toLowerCase().includes(searchText.toLowerCase())
        );
    });

    return (
        <View style={styles.body}>
            <View style={styles.search_header}>
                <TouchableWithoutFeedback>
                    <TextInput
                        style={styles.search_text}
                        placeholderTextColor="#ABABAB"
                        placeholder={isFocused ? '' : 'Nhập tên loại cây, loại bệnh ...'} // Hiển thị placeholder tùy thuộc vào trạng thái isFocused
                        // ... các thuộc tính khác
                        onChangeText={(text) => setSearchText(text)}
                        multiline={false} // Chỉ cho phép nhập trên 1 dòng
                        numberOfLines={1} // Số dòng tối đa là 1
                        // value={inputValue}
                        // onFocus={handleFocus}
                        // onBlur={handleBlur}
                    />
                </TouchableWithoutFeedback>
                <Icon name="search1" size={30} onPress={handleIconPress} />
            </View>

            <View style={styles.search_list}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={SearchForecast}
                        renderItem={({ item }) => (
                            <View style={styles.search_item}>
                                <TouchableOpacity onPress={() => showdetail(item)}>
                                    <Image style={styles.item_img} source={{ uri: item.avatar }} resizeMode="contain" />
                                </TouchableOpacity>
                                <View style={styles.item_content}>
                                    <TouchableOpacity onPress={() => showdetail(item)}>
                                        <Text style={styles.content_header}>{item.name}</Text>
                                    </TouchableOpacity>
                                    <View style={styles.content_body}>
                                        <Text style={styles.body_lb}>Loại bệnh: </Text>
                                        <Text style={styles.body_value}>{item.disease}</Text>
                                    </View>
                                    <View style={styles.content_body}>
                                        <Text style={styles.body_lb}>Nguyên nhân: </Text>
                                        <Text style={styles.body_value}>{item.cause}</Text>
                                    </View>
                                    <View style={styles.content_body}>
                                        <Text style={styles.body_lb}>Giải pháp: </Text>
                                        <Text style={styles.body_value}>{item.solution}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                )}
            </View>
            <Icons style={styles.btn_search} name="add-circle" size={80} onPress={goCamera} />

            {img != '' ? <Image source={{ uri: img }} style={{ width: 250, height: 200 }} /> : ''}
        </View>
    );
};

export default ContentSearch;

const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#FFFF',
        marginBottom: 70,
    },
    search_header: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#E0DEDE',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
        justifyContent: 'space-between',
    },

    search_text: {
        marginLeft: 10,
        fontSize: 17,
        color: '#00000',
        width: '80%',
    },
    search_list: {
        marginVertical: 10,
        width: '90%',
        height: 530,
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
        marginTop: 20,
    },
});

function launchCamera(arg0: { mediaType: string; cameraType: string }) {
    throw new Error('Function not implemented.');
}
