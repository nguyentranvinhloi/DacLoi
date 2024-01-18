import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function User() {
    const [titleText, setTitleText] = useState("User");

    const navigation = useNavigation(); // Đặt hook useNavigation trong hàm component

    const onPressTitle = () => {
        setTitleText("User");
    };
    return (
        <View style={styles.container}>
            {/* <View style={styles.d}></View> */}
            {/* <View style={styles.head}> */}


            <Text style={styles.title} onPress={onPressTitle}>
                Thông tin người dùng
                {'\n'}
                {'\n'}
            </Text>
            <View style={styles.catetitle}>
                <Image
                    source={require('../assets/images/Loi.jpg')}
                    style={{ width: 80, height: 80, margin: 3 }}
                />
                <View>
                    <Text style={styles.phu}>NGUYỄN TRẦN VĨNH LỢI                            </Text>
                    <Text style={styles.phu}>                   2003</Text>
                    <Text style={styles.phu}>                  Admin</Text>
                </View>
            </View>

            <SafeAreaView>
                <View style={styles.catetitle}>
                    <Text style={styles.phu}>Ngày sinh: </Text>
                    <Text style={styles.phuu}>11/05/2003</Text>
                </View>

                <View style={styles.catetitle}>
                    <Text style={styles.phu}>Số điện thoại: </Text>
                    <Text style={styles.phuu}>0932293748</Text>
                </View>

                <View style={styles.catetitle}>
                    <Text style={styles.phu}>Địa chỉ: </Text>
                    <Text style={styles.phuu}>22Ađường 147, Phước Long B, TP Thủ Đức, TPHCM </Text>
                </View>

                <View style={styles.catetitle}>
                    <Text style={styles.phu}>Email: </Text>
                    <Text style={styles.phuu}>Nguyentranvinhloi12@gmail.com</Text>
                </View>
            </SafeAreaView>

            

            <StatusBar style="auto" />
        </View>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',

    },
    head: {
        flex: 1,
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        //padding: 0,
        //marginTop: 0,
    },
    d: {
        flex: 2,
        padding: 16,
        marginTop: 5,
    },
    input: {
        height: 35,
        width: 300,
        margin: 15,
        borderWidth: 1,
        padding: 10,
    },
    phu: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    phuu: {
        color: "black",
        marginEnd: 15,
    },
    catetitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },


});
