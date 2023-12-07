import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
const ContentProfile = ({ navigation }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState('');
    const handleButtonClick = () => {
        // Đảo ngược trạng thái editable
        setIsEditable(!isEditable);
    };
    const handleLogout = () => {
        console.log('User has clicked the logout button.');
        // Delete token here
        navigation.navigate('SignIn');
    };

    return (
        <View style={styles.body}>
            <Image style={styles.avt_img} source={require('../../assets/IMG_PBL/avtProfile.png')} />
            <Text style={styles.name}>Ten Account</Text>
            <View style={styles.profile}>
                <View style={styles.profile_item}>
                    <Text style={styles.item_lb}>Name</Text>
                    <TextInput
                        style={styles.item_input}
                        placeholder="Name Account"
                        multiline={false} // Chỉ cho phép nhập trên 1 dòng
                        numberOfLines={1} // Số dòng tối đa là 1
                        editable={isEditable}
                    />
                </View>
                <View style={styles.profile_item}>
                    <Text style={styles.item_lb}>Email</Text>
                    <TextInput
                        style={styles.item_input}
                        placeholder="Email Account"
                        multiline={false} // Chỉ cho phép nhập trên 1 dòng
                        numberOfLines={1} // Số dòng tối đa là 1
                        editable={isEditable}
                    />
                </View>
                <View style={styles.profile_item}>
                    <Text style={styles.item_lb}>Phone</Text>
                    <TextInput
                        style={styles.item_input}
                        placeholder="Phone Account"
                        multiline={false} // Chỉ cho phép nhập trên 1 dòng
                        numberOfLines={1} // Số dòng tối đa là 1
                        editable={isEditable}
                    />
                </View>
                <View style={styles.profile_item}>
                    <Text style={styles.item_lb}>Address</Text>
                    <TextInput
                        style={styles.item_input}
                        placeholder="Address Account"
                        multiline={false} // Chỉ cho phép nhập trên 1 dòng
                        numberOfLines={1} // Số dòng tối đa là 1
                        editable={isEditable}
                    />
                </View>
            </View>

            <View style={styles.btn_profile}>
                <TouchableOpacity onPress={handleButtonClick}>
                    <View style={styles.btn_edit}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#15504A' }}>
                            {isEditable ? 'Lưu' : 'Chỉnh sửa hồ sơ'}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout}>
                    <View style={styles.btn_edit}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3073D2' }}>Đăng xuất</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ContentProfile;

const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFF',
        marginBottom: 300,
    },
    avt_img: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    name: {
        marginVertical: 20,
        fontSize: 30,
        fontWeight: '500',
    },
    profile: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    profile_item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    item_lb: {
        fontSize: 20,
        fontWeight: '500',
    },
    item_input: {
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        width: '70%',
        fontWeight: '500',
    },

    btn_profile: {
        position: 'absolute',
        right: '10%',
        top: '100%',
    },
    btn_edit: {
        marginTop: 10,
        backgroundColor: '#E2F6E8',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 50,
    },
});
