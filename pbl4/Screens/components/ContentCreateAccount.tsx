import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Checkbox from "expo-checkbox";
// import { FIREBASE_AUTH } from "../../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { NavigationProp } from "@react-navigation/native";


type ContentCreateAccountProps = {
    title: string;
    navigation: any;
}
const ContentCreateAccount = ({ title, navigation }: ContentCreateAccountProps) => {
    const [isCheck, setIsCheck] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [xnpass, setXNPass] = useState('');
    const [checkEmail, setCheckEmail] = useState(true);
    const [checkXN, setCheckXN] = useState(true);
    const [errorPass, setErrorPass] = useState('');

    const [loading, setLoading] = useState(false);
    // const auth = FIREBASE_AUTH;

    const signUp = async () => {
        setLoading(true);
        // try {
        //     const reponse = await createUserWithEmailAndPassword(auth, email, password);
        //     console.log(reponse);
        //     alert('Check your emails!');
        // } catch (error:any) {
        //     console.log(error);
        //     alert('Sign in failed: ' + error.message);
        // } finally {
        //     setLoading(false);

        // }
    }



    function onSubmit(): void {
        let formData = {
            _email: email,
            _pass: password,
            _check: isCheck,
            _xnpass: xnpass,
        };

        let regexEmail = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])");

        if (!regexEmail.test(formData._email)) {
            setCheckEmail(false);
        }
        else {
            setCheckEmail(true);
        }

        formData._pass === '' ? setErrorPass('Pass không để rỗng') : setErrorPass('');

        if (formData._pass !== formData._xnpass) {
            setCheckXN(false);
        }
        else {
            setCheckXN(true);
        }
        if (checkEmail === false || checkXN === false || formData._pass !== '') {
            navigation.navigate('Home');

        }
        else {
            Alert.alert('Nhap lai!!!');
        }
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.content_title}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text>
                            <Icon name="arrowleft" size={40} />
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{title}</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.group}>
                        <Text style={styles.txt}>Email</Text>
                        <View style={styles.Input}>
                            <TextInput placeholder="Nhập email" style={styles.InputTxt} onChangeText={(value) => setEmail(value)}></TextInput>
                        </View>
                        <Text style={{ color: 'red', fontSize: 18, marginTop: 5 }}>{!checkEmail ? 'Sai định dạng email' : ''}</Text>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.txt}>Password</Text>
                        <View style={styles.Input}>
                            <TextInput placeholder="Nhập mật khẩu" style={styles.InputTxt} secureTextEntry={true} onChangeText={(value) => setPassword(value)}></TextInput>
                            <TouchableOpacity style={styles.InputIcon} onPress={() => alert('Hien mat khau')}>
                                <Text ><Icon name="eye" size={30} /></Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'red', fontSize: 18, marginTop: 5 }}>{errorPass}</Text>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.txt}>Xác nhận mật khẩu</Text>
                        <View style={styles.Input}>
                            <TextInput placeholder="Xác nhận mật khẩu" style={styles.InputTxt} secureTextEntry={true} onChangeText={(value) => setXNPass(value)}></TextInput>
                            <TouchableOpacity style={styles.InputIcon} onPress={() => alert('Hien mat khau')}>
                                <Text ><Icon name="eye" size={30} /></Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'red', fontSize: 18, marginTop: 5 }}>{!checkXN ? 'Mật khẩu không đúng' : ''}</Text>
                    </View>

                    <View style={styles.xacnhan}>
                        <Checkbox style={styles.xacnhanCheckBox}
                            disabled={false}
                            value={isCheck}
                            onValueChange={() => {
                                setIsCheck(!isCheck);
                            }}
                        />
                        <View style={styles.xacnhanTitle}>
                            <Text style={{ fontSize: 20 }}>
                                Tôi chấp nhận những
                            </Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20, fontWeight: '600' }}>Điều khoản sử dụng </Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20 }}>và</Text>
                            <TouchableOpacity >
                                <Text style={{ fontSize: 20, fontWeight: '600' }}> Chính sách bảo mật</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View >
                        <TouchableOpacity style={styles.button} onPress={signUp}>
                            <Text style={styles.btnText}>{title}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.titleLast}>
                        <Text style={{ fontSize: 20 }}> Đã có tài khoản?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', }} > Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFF',
    },
    content_title: {
        flexDirection: 'row',

    },
    headerTitle: {
        fontSize: 30,
        fontWeight: '600',
        marginLeft: '20%',
    },
    form: {

    },
    group: {
        paddingLeft: 20,
        paddingVertical: 15,

    },
    txt: {
        fontSize: 20,
        fontWeight: '700',
    },
    Input: {
        width: '90%',
        height: 50,
        backgroundColor: '#EBEBEB',
        paddingHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    InputTxt: {
        fontSize: 20,
        width: '90%',

    },
    InputIcon: {
        marginTop: 10,
    },
    xacnhan: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 30,
        marginTop: 10,

    },
    xacnhanCheckBox: {
        marginTop: 2,

    },
    xacnhanTitle: {
        marginLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button: {
        width: 320,
        height: 56,
        borderRadius: 50,
        backgroundColor: '#A3D2B1',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: '10%'
    },
    btnText: {
        fontSize: 25,
        fontWeight: '500',
    },

    titleLast: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
});
export default ContentCreateAccount;
