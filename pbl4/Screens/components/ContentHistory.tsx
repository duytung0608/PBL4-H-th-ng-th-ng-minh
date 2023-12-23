import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ContentHistory = ({ navigation }) => {
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

    const goCamera = () => {
        navigation.navigate('HomeCamera');
    };

    // goi API
    const [forecast, setForecast] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // const getAPI = async () => {
    //     try {
    //         const respone = await fetch('http://localhost:3000/api/pbl4/accounts');
    //         const data = await respone.json();
    //         console.log(data);
    //         setForecast(data);
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const getAPI = async () => {
        try {
            const response = await axios.get('https://pbl4-h-th-ng-th-ng-minh.onrender.com/api/pbl4/forecasts');
            const responseData = response.data.data;
            console.log('data: ', responseData);
            // setForecast(data);
            setForecast(responseData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAPI();
    }, []);
    const showdetail = async (item) => {
        try {
            await AsyncStorage.setItem('dulieu', JSON.stringify(item));
            navigation.navigate('HomeItem');
        } catch (error) {
            console.log(error);
        }
    };

    // Hàm search
    const [searchText, setSearchText] = useState('');
    const SearchForecast =
        forecast.length > 0 &&
        forecast.filter((item) => {
            return (
                item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                item.disease.toLowerCase().includes(searchText.toLowerCase()) ||
                item.cause.toLowerCase().includes(searchText.toLowerCase()) ||
                item.solution.toLowerCase().includes(searchText.toLowerCase())
            );
        });
    // Sử dụng SearchForecast ở đây

    // Hoặc có thể thêm điều kiện kiểm tra forecast rỗng
    if (!SearchForecast) {
        // Xử lý khi SearchForecast rỗng
    }

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
                                    <Image style={styles.item_img} source={{ uri: item.avatar }} />
                                </TouchableOpacity>

                                <View style={styles.item_content}>
                                    <TouchableOpacity onPress={() => showdetail(item)}>
                                        <Text style={styles.content_header}>{item.name}</Text>
                                    </TouchableOpacity>
                                    <Text
                                        style={styles.content_header}
                                        numberOfLines={1} // Set the number of lines to 1
                                        ellipsizeMode="tail" // Truncate text with an ellipsis at the end
                                    >
                                        {item.disease}
                                    </Text>
                                </View>
                            </View>
                        )}
                    />
                )}
            </View>
            <Icons style={styles.btn_search} name="add-circle" size={80} onPress={goCamera} />
        </View>
    );
};

export default ContentHistory;

const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingTop: 10,
        marginBottom: 100,
    },
    search_header: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#E0DEDE',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 50,
        justifyContent: 'space-between',
    },

    search_text: {
        marginLeft: 10,
        fontSize: 17,
        color: '#0000',
        width: '80%',
    },
    search_list: {
        marginVertical: 10,
        width: '90%',
        height: 530,
    },
    search_item: {
        backgroundColor: '#F6F0E2',
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
        width: 60,
        height: 60,
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
        width: 250,
    },
    content_body: {
        flexDirection: 'row',
        marginTop: 5,
        width: 200,
        flexWrap: 'wrap',
    },
    body_lb: {
        fontSize: 16,
    },
    body_value: {
        fontWeight: '600',
        fontSize: 16,
    },
    btn_search: {
        color: '#50D2C2',
        position: 'absolute',
        right: '10%',
        top: '100%',
        marginTop: 20,
    },
});
