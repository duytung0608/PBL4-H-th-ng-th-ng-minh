import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


const ContentHomeItem = () => {
  return (
        <View style={styles.container}>
            <View style={styles.header_lb}>
                <Text style={styles.title}>Cây Lúa</Text>
            </View>
            <View >
                <Image style={styles.content_img}  source={require('../../assets/IMG_PBL/benh_img.jpg')}/>
            </View>
            <View style={styles.content}>
                <View style={styles.content_item}>
                    <Text style={styles.content_item_lb}>Loại bệnh:</Text>
                    <Text style={styles.content_item_title}>Benh dao tren lua</Text>
                </View>
                <View style={styles.content_item}>
                    <Text style={styles.content_item_lb}>Nguyên nhân:</Text>
                    <Text style={styles.content_item_title}>Benh dao tren lua</Text>
                </View>
                <View style={styles.content_item}>
                    <Text style={styles.content_item_lb}>Giải pháp:</Text>
                    <Text style={styles.content_item_title}>Benh dao tren lua</Text>
                </View>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFF',

    },
    header_lb: {
        width: '65%',
        height: 50,
        marginVertical: 10,
        backgroundColor: '#A3D2B1',
        borderRadius: 10,


    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        textAlign: 'center',
        color: '#15504A',

    },

    content_img: {
        borderRadius: 10,
        marginBottom: 10,
        width: 256,
        height: 256,
    },

    content: {
        width: '65%',
        height: '45%',
        backgroundColor: '#E2EDF6',
        borderRadius: 10,

    },

    content_item: {
        marginVertical: 5,
        marginHorizontal: 10,


    },
    content_item_lb: {
        fontSize: 20,

    },

    content_item_title: {
        fontSize: 22,
        fontWeight: '500',
        marginLeft: 15,

    },

});
export default ContentHomeItem