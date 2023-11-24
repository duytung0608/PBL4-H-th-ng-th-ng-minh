import { NavigationProp } from "@react-navigation/native";
import React from "react"
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native";

const ContentPBL = ({navigation}) => {
    return (
        <>
            <View style={styles.body}>
                <View style={styles.content_img}>
                    <Image style={styles.img} source={require('../../assets/IMG_PBL/content_img.png')} />
                </View>

                <View style={styles.content_title}>
                    <Text style={styles.title}>TTNQ là công cụ tra cứu bệnh và nguyên nhân gây bệnh ở cây nông nghiệp</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateAccount')}>
                        <Text style={styles.btnText}>Bắt đầu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleLast}>
                    <Text style={{ fontSize: 20 }}> Đã có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }} >  Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F4F4F4',
        paddingHorizontal: 20,

        paddingTop: 40,

        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',

    },
    content_img: {
        width: '70%',
    },
    img: {
        width: '100%',
    },

    content_title: {
        paddingVertical: 60,

    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center'
    },
    button: {
        width: 320,
        height: 56,
        borderRadius: 50,
        backgroundColor: '#50D2C2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 25,
        fontWeight: '500',
    },
    titleLast: {
        marginVertical: 20,
        flexDirection: 'row',
    },
});

export default ContentPBL;