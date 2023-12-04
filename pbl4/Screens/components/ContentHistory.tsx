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
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';

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
        navigation.navigate('Home');
    };

    const dataFake = [
        {
            id: 1,
            name: 'Cay Lua',
            benh: 'Loai benh',
            image: 'https://firebasestorage.googleapis.com/v0/b/baith-e7c12.appspot.com/o/img_benh-dao-on-tren-lua.png?alt=media&token=31c1f98b-1f02-49b6-8a54-c8618c1a2f57',
        },
        {
            id: 2,
            name: 'Cay Lua',
            benh: 'Loai benh',
            image: 'https://firebasestorage.googleapis.com/v0/b/baith-e7c12.appspot.com/o/img_benh-dao-on-tren-lua.png?alt=media&token=31c1f98b-1f02-49b6-8a54-c8618c1a2f57',
        },
        {
            id: 3,
            name: 'Cay Lua',
            benh: 'Loai benh',
            image: 'https://firebasestorage.googleapis.com/v0/b/baith-e7c12.appspot.com/o/img_benh-dao-on-tren-lua.png?alt=media&token=31c1f98b-1f02-49b6-8a54-c8618c1a2f57',
        },
        {
            id: 4,
            name: 'Cay Lua',
            benh: 'Loai benh',
            image: 'https://firebasestorage.googleapis.com/v0/b/baith-e7c12.appspot.com/o/img_benh-dao-on-tren-lua.png?alt=media&token=31c1f98b-1f02-49b6-8a54-c8618c1a2f57',
        },
        {
            id: 5,
            name: 'Cay Lua',
            benh: 'Loai benh',
            image: 'https://firebasestorage.googleapis.com/v0/b/baith-e7c12.appspot.com/o/img_benh-dao-on-tren-lua.png?alt=media&token=31c1f98b-1f02-49b6-8a54-c8618c1a2f57',
        },
        {
            id: 6,
            name: 'Cay Lua',
            benh: 'Loai benh',
            image: 'https://firebasestorage.googleapis.com/v0/b/baith-e7c12.appspot.com/o/img_benh-dao-on-tren-lua.png?alt=media&token=31c1f98b-1f02-49b6-8a54-c8618c1a2f57',
        },
        {
            id: 7,
            name: 'Cay Lua',
            benh: 'Loai benh',
            image: 'https://firebasestorage.googleapis.com/v0/b/baith-e7c12.appspot.com/o/img_benh-dao-on-tren-lua.png?alt=media&token=31c1f98b-1f02-49b6-8a54-c8618c1a2f57',
        },
        {
            id: 8,
            name: 'Cay Lua',
            benh: 'Loai benh',
            image: 'https://firebasestorage.googleapis.com/v0/b/baith-e7c12.appspot.com/o/img_benh-dao-on-tren-lua.png?alt=media&token=31c1f98b-1f02-49b6-8a54-c8618c1a2f57',
        },
    ];
    return (
        <View style={styles.body}>
            <View style={styles.search_header}>
                <TouchableWithoutFeedback>
                    <TextInput
                        style={styles.search_text}
                        placeholderTextColor="#ABABAB"
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
                <FlatList
                    data={dataFake}
                    renderItem={({ item }) => (
                        <View style={styles.search_item}>
                            <Image style={styles.item_img} source={{ uri: item.image }} />
                            <View style={styles.item_content}>
                                <Text style={styles.content_header}>{item.name}</Text>
                                <Text style={styles.content_header}>{item.benh}</Text>
                            </View>
                        </View>
                    )}
                />
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
        color: '#00000',
        width: '80%',
    },
    search_list: {
        marginVertical: 10,
        width: '90%',
        height: 500,
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
    },
});
