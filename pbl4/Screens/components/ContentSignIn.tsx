import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import User from '../../repositories/user';
// import { FIREBASE_AUTH } from "../../firebase";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

type ContentSingInProps = {
    title: string;
    navigation: any;
};
const ContentSignIn = ({ title, navigation }: ContentSingInProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkEmail, setCheckEmail] = useState(true);
    const [errorPass, setErrorPass] = useState('');

    const [loading, setLoading] = useState(false);

    const checkLogin = async (email, password, setCheckEmail, setErrorPass, navigation) => {
        let formData = {
            username: email,
            password: password,
        };

        try {
            // Gửi yêu cầu để kiểm tra đăng nhập từ API
            const response = await axios.post(
                'https://pbl4-h-th-ng-th-ng-minh.onrender.com/api/pbl4/accounts/login',
                {
                    username: email,
                    password: password,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
            );
            console.log('username = ', formData.username);
            console.log('password = ', formData.password);
            // Kiểm tra xem có thông tin tài khoản trùng khớp hay không
            if (response.data.length > 0) {
                // Đăng nhập thành công, chuyển đến trang BottomTabs
                navigation.navigate('BottomTabs');
            } else {
                // Tài khoản không hợp lệ
                Alert.alert('Tài khoản hoặc mật khẩu không đúng. Vui lòng kiểm tra lại!');
            }
        } catch (error) {
            console.error(error);
            // Xử lý lỗi khi gọi API
            Alert.alert('Đã xảy ra lỗi khi kiểm tra đăng nhập. Vui lòng thử lại sau!');
        }
    };
    const handleLogin = async (username, password, navigation) => {
        try {
            // Gửi yêu cầu để kiểm tra đăng nhập từ API
            const apiResponse = await axios.post('https://pbl4-h-th-ng-th-ng-minh.onrender.com/api/pbl4/accounts', {
                username: username,
                password: password,
            });

            // Kiểm tra xem có thông tin tài khoản trùng khớp hay không
            if (apiResponse.data.success) {
                // Đăng nhập thành công, chuyển đến trang BottomTabs và gửi thông tin người dùng
                navigation.navigate('BottomTabs', { user: apiResponse.data.user });
            } else {
                // Tài khoản không hợp lệ
                alert('Tài khoản hoặc mật khẩu không đúng. Vui lòng kiểm tra lại!');
            }
        } catch (error) {
            console.error(error);
            // Xử lý lỗi từ server hoặc lỗi khi gọi API
            Alert.alert('Đã xảy ra lỗi khi kiểm tra đăng nhập. Vui lòng thử lại sau!');
        }
    };
    const onSubmit = () => {
        let formData = {
            username: email,
            password: password,
        };

        let regexEmail = new RegExp(
            '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])'
        );
        if (!regexEmail.test(formData.username)) {
            setCheckEmail(false);
        } else {
            setCheckEmail(true);
        }
        formData.password === '' ? setErrorPass('Pass không để rỗng') : setErrorPass('');
        if (checkEmail === true && formData.password !== '') {
            checkLogin(email, password, setEmail, setErrorPass, navigation);
            // handleLogin(email, password, navigation);
        } else {
            Alert.alert('Nhap lai!!!');
            navigation.navigate('SignIn');
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.content_title}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text>
                            <Icon name="chevron-back" size={40} />
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{title}</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.group}>
                        <Text style={styles.txt}>Email</Text>
                        <View style={styles.Input}>
                            <TextInput
                                placeholder="Nhap Email"
                                style={styles.InputTxt}
                                onChangeText={(value) => setEmail(value)}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.txt}>Password</Text>
                        <View style={styles.Input}>
                            <TextInput
                                placeholder="Nhập mật khẩu"
                                style={styles.InputTxt}
                                secureTextEntry={!showPassword}
                                onChangeText={(value) => setPassword(value)}
                            ></TextInput>
                            <TouchableOpacity style={styles.InputIcon} onPress={toggleShowPassword}>
                                <Text>
                                    {showPassword ? <Icon name="eye" size={30} /> : <Icon name="eye-off" size={30} />}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.titleLast}>
                            <Text style={{ fontSize: 16 }}> Quên mật khẩu?</Text>
                            <TouchableOpacity onPress={() => alert('Chuyen sang trang login')}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Đặt lại mật khẩu</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.button} onPress={onSubmit}>
                            <Text style={styles.btnText}>{title}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.titleLast}>
                        <Text style={{ fontSize: 20 }}> Chưa có tài khoản?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Đăng kí</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    content_title: {
        flexDirection: 'row',
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: '600',
        marginLeft: '30%',
    },
    form: {},
    group: {
        paddingLeft: 20,
        paddingVertical: 15,
    },
    txt: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
    },
    Input: {
        width: '90%',
        height: 50,
        backgroundColor: '#EBEBEB',
        paddingHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    InputTxt: {
        fontSize: 20,
        width: '90%',
    },
    InputIcon: {
        marginTop: 10,
    },
    button: {
        width: 320,
        height: 56,
        borderRadius: 50,
        backgroundColor: '#A3D2B1',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: '10%',
    },
    btnText: {
        fontSize: 25,
        fontWeight: '500',
    },

    titleLast: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default ContentSignIn;
