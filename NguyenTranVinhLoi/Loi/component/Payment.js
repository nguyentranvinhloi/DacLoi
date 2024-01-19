import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../CartProvider/CartContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const navigation = useNavigation();
  const { updateCartItemCount } = useContext(CartContext);

//-----------------------------------------------------------------------------------
 
  //-----------------------------------------------------------------------------------------
  const handleRemoveItem = async (itemId) => {
    try {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === itemId) {
          item.quantity -= 1;
          if (item.quantity === 0) {
            return null;
          }
        }
        return item;
      }).filter(Boolean);

      setCartItems(updatedCartItems);
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      updateCartItemCount(getCartItemCount(updatedCartItems));
    } catch (error) {
      console.log('Error removing item from cart:', error);
    }
  };

  const getCartItemCount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  //---------------------------------------------------------------------------
  const handlePayment = async (itemId) => {
    handleRemoveItem(itemId);
    alert("Đặt hàng thành công!");
   navigation.navigate('HomeScreen');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/pc.jpg')} style={styles.logo} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Số thẻ</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số thẻ"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập CVV"
          value={cvv}
          onChangeText={setCVV}
          secureTextEntry
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          placeholder="mm/yyyy"
          value={cvv}
          onChangeText={setCVV}
          secureTextEntry
        />
      </View>

      <View style={styles.paymentOptions}>
        <Text style={styles.paymentLabel}>Chọn phương thức thanh toán</Text>
        <View style={styles.paymentIcons}>
          <FontAwesome name="cc-mastercard" size={40} color="#FF6F00" style={styles.paymentIcon} />
          <FontAwesome name="cc-paypal" size={40} color="#00457C" style={styles.paymentIcon} />
          <FontAwesome name="cc-visa" size={40} color="#6772E5" style={styles.paymentIcon} />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Thanh toán</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  paymentOptions: {
    marginBottom: 20,
  },
  paymentLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  paymentIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentIcon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: '#ee4d2d',
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Payment;