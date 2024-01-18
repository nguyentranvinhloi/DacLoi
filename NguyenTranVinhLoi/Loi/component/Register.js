import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const [titleText, setTitleText] = useState("Register");

    const navigation = useNavigation(); // Đặt hook useNavigation trong hàm component

    const onPressTitle = () => {
        setTitleText("Register");
    };
    return (
        <View style={styles.container}>
            {/* <View style={styles.d}></View> */}
            <View style={styles.head}>
                {/* <Image
                    source={require('../assets/images/tp1.png')}
                    style={{ width: 150, height: 150, margin: 3 }}
                /> */}

                <Text style={styles.head} onPress={onPressTitle}>
                    Đăng ký
                    {'\n'}
                    {'\n'}
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            placeholder="Họ tên "
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Số điện thoại "
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Địa chỉ "
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Tài khoản"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Mật khẩu"
                        />
                        <Text>{'\n'}</Text>
                        <Button
                            style={styles.input}
                            title="Đăng ký"
                            color="#841584"
                            onPress={() => navigation.navigate('Đăng nhập')}
                        />

                        <View style={styles.catetitle}>
                            <Text style={styles.phu}>Bạn đã có tài khoản?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Đăng nhập')}>
                                <Text style={styles.phuu}>Đăng nhập</Text>
                            </TouchableOpacity>

                        </View>
                    </SafeAreaView>

                </Text>

                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //padding: 10,
        marginTop: 5,
    },
    ccc: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',

    },
    head: {
        flex: 10,
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        marginTop: 0,
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
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    phuu: {
        //flex: 1,
        backgroundColor: '#ddd',
        color:"red",
        //alignItems: 'center',
        //justifyContent: 'center',
        marginEnd: 15,
    },
    catetitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
      },
    // button: {
    //     height: 25,
    //     width: 50,
    //     margin: 12,
    //     borderWidth: 1,
    //     padding: 10,
    // },

});
