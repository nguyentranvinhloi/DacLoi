import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../CartProvider/CartContext';


function HomeBar() {
    const { cartItems } = useContext(CartContext);
    const navigation = useNavigation();
    const handleHomePress = () => {
        navigation.navigate('HomeScreen');
    };
    const handleLoginPress = () => {
        navigation.navigate('Đăng nhập');
    };
    const handleCartPress = (cartItems) => {
        navigation.navigate('Giỏ hàng', { cartItems });
    };
    const handleUserPress = () => {
        navigation.navigate('Tài khoản');
    };
    const handleSearchPress = () => {
        navigation.navigate('Tìm kiếm');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item} onPress={() => handleHomePress()}>
                <Icon name="home" size={20} color="#333333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleSearchPress()}>
                <Icon name="search" size={20} color="#333333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => handleCartPress(cartItems)}>
                <Icon name="shopping-cart" size={20} color="#333333" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleLoginPress()}>
                <Icon name="sign-in" size={20} color="#444" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => handleUserPress()}>
                <Icon name="user" size={20} color="#333333" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        height: 50,
    },
    button: {
        padding: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    activeMenuItem: {
        backgroundColor: '#e0e0e0',
    },
});

export default HomeBar;