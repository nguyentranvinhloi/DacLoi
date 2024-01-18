import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [titleText, setTitleText] = useState("Login");

    const navigation = useNavigation(); // Đặt hook useNavigation trong hàm component

    const onPressTitle = () => {
        setTitleText("Login");
    };
    
    return (
        <View style={styles.container}>
            {/* <View style={styles.d}></View> */}
            <View style={styles.head}>
            <Image
                source={require('../assets/images/tp1.png')}
                style={{ width: 150, height: 150, margin: 3 }}
            />

            <Text style={styles.head} onPress={onPressTitle}>
                Đăng nhập
                {'\n'}
                {'\n'}
                <SafeAreaView>
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
                        title="Đăng nhập"
                        color="#841584"
                        onPress={() => navigation.navigate('HomeScreen')}
                    />
                    <Text style={styles.phu}>Quên mật khẩu?</Text>
                    <View style={styles.catetitle}>
                        <Text style={styles.phu}>Bạn chưa có tài khoản?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Đăng ký')}>
                            <Text style={styles.phuu}>Đăng ký</Text>
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
        marginTop:10,
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
        //flex: 1,
        backgroundColor: '#ddd',
        marginLeft: 15,
        //alignItems: 'center',
        //justifyContent: 'center',
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
