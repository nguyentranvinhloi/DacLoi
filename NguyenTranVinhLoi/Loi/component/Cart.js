import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartContext } from '../CartProvider/CartContext';
import { useNavigation } from '@react-navigation/native';


const CartScreen = () => {
  const { updateCartItemCount } = useContext(CartContext);
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);
  //------------------------------------------------------------------------------------------
  const fetchCartItems = async () => {
    try {
      const cartItemsData = await AsyncStorage.getItem('cartItems');
      if (cartItemsData) {
        const parsedCartItems = JSON.parse(cartItemsData);
        setCartItems(parsedCartItems);
        updateCartItemCount(getCartItemCount(parsedCartItems));
      }
    } catch (error) {
      console.log('Error fetching cart items:', error);
    }
  };
  //------------------------------------------------------------------------------------------Xoa
  const handleRemoveItem = async (itemId) => {
    try {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === itemId) {
            return null;
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

  const getCartCount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  //------------------------------------------------------------------------------------------Tăng
  const handleAItem = async (itemId) => {
    try {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === itemId) {
          item.quantity += 1;
          if (item.quantity === 10) {
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
  
  //------------------------------------------------------------------------------------------Giam
  const handleDItem = async (itemId) => {
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
  //------------------------------------------------------------------------------------------
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(totalPrice);
  };
  //------------------------------------------------------------------------------------------
  const getCartItemCount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    navigation.navigate('Thanh toán');
  };
  //------------------------------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giỏ hàng</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.cartItemImage} />
              <View style={styles.cartItemInfo}>
                <Text style={styles.cartItemTitle}>{item.title} ({item.quantity})</Text>
                <Text style={styles.cartItemPrice}>Giá: ${item.price.toFixed(2)}</Text>
              </View>
              <TouchableOpacity onPress={() => handleAItem(item.id)}>
                <Text style={styles.removeItemButton}>Thêm   </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleDItem(item.id)}>
                <Text style={styles.removeItemButtonn}>Giảm   </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                <Text style={styles.removeItemButtonnn}>Xóa</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View>
          <Text style={styles.emptyCartText}>Giỏ hàng của bạn chưa có sản phẩm nào!</Text>
          <Image
            source={require('../assets/images/cartemty.png')}
            style={{ width: 350, height: 300 }}
          />
        </View>

      )}
      <Text style={styles.totalPrice}>Tổng tiền: ${totalPrice.toFixed(2)}</Text>
      <Button title="Thanh toán" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'red',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 14,
    color: 'orange',
  },
  removeItemButtonnn: {
    fontSize: 14,
    color: 'red',
    marginTop: 8,
  },
  removeItemButtonn: {
    fontSize: 14,
    color: 'green',
    marginTop: 8,
  },
  removeItemButton: {
    fontSize: 14,
    color: 'blue',
    marginTop: 8,
  },
  emptyCartText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
    color: 'blue',
  },
});

export default CartScreen;