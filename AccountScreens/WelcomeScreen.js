import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from 'react-native';
import {COLOURS, Items} from '../database/Database';
import {MaterialIcons, Ionicons, FontAwesome} from '@expo/vector-icons';

// import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = () => {
  

  const [product, setProduct] = useState({});

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getDataFromDB();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  //get product data by productID

  // const getDataFromDB = async () => {
  //   for (let index = 0; index < Items.length; index++) {
  //     if (Items[index].id == productID) {
  //       await setProduct(Items[index]);
  //       return;
  //     }
  //   }
  // };

  //add to cart

  // const addToCart = async id => {
  //   let itemArray = await AsyncStorage.getItem('cartItems');
  //   itemArray = JSON.parse(itemArray);
  //   if (itemArray) {
  //     let array = itemArray;
  //     array.push(id);

  //     try {
  //       await AsyncStorage.setItem('cartItems', JSON.stringify(array));
  //       ToastAndroid.show(
  //         'Item Added Successfully to cart',
  //         ToastAndroid.SHORT,
  //       );
  //       navigation.navigate('Home');
  //     } catch (error) {
  //       return error;
  //     }
  //   } else {
  //     let array = [];
  //     array.push(id);
  //     try {
  //       await AsyncStorage.setItem('cartItems', JSON.stringify(array));
  //       ToastAndroid.show(
  //         'Item Added Successfully to cart',
  //         ToastAndroid.SHORT,
  //       );
  //       navigation.navigate('Home');
  //     } catch (error) {
  //       return error;
  //     }
  //   }
  // };

  //product horizontal scroll product card
  // const renderProduct = () => {
  //   return (
     
  //   );
  // };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />

       <View
        style={{
          width: width,
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/1q.jpeg')}
          style={{
            width: width,
            height: 200,
            resizeMode: 'cover',
          }}
        />
      </View>



      <ScrollView>
       
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 14,
            }}>
            <FontAwesome
              name="home"
              style={{
                fontSize: 18,
                color: COLOURS.blue,
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
              }}>
              Get More Informtion
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                letterSpacing: 0.5,
                marginVertical: 10,
                color: COLOURS.black,
                
              }}>
              product.productName
            </Text>
            <FontAwesome
              name="home"
              style={{
                fontSize: 24,
                color: COLOURS.blue,
                backgroundColor: COLOURS.blue + 10,
                padding: 8,
                borderRadius: 100,
              }}
            />
          </View>


          
         
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 14,
              borderBottomColor: COLOURS.backgroundLight,
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}>
            


 <Text
            style={{
              fontSize: 12,
              color: COLOURS.black,
              fontWeight: '400',
              letterSpacing: 1,
              opacity: 1,
              lineHeight: 20,

              marginBottom: 18,
            }}>
            product.description 
            product.description 
            
          </Text> 

            
          </View>
          
        </View>













       {/* BUTTON*/}


<View
        style={{
          
          bottom: 10,
          
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <Text
            style={{
              fontSize: 12,
              color: COLOURS.black,
              fontWeight: '400',
              letterSpacing: 1,
              opacity: 1,
              lineHeight: 20,

              marginBottom: 18,
            }}>
            product.description 
            product.description 
            product.description 
            product.description 
            product.description 
            product.description 
            
          </Text> 

        <TouchableOpacity
         
          style={{
            width: '50%',
            
            backgroundColor: COLOURS.blue,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            padding:10,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: 'uppercase',
            }}>
           Read More
          </Text>
        </TouchableOpacity>
      </View>


      </ScrollView>








      
    </View>
  );
};

export default WelcomeScreen;
