import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
import {MotiView} from 'moti';
import MainHeader from '../Headers/MainHeader';

import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';


const BidhaaZetuScreen = ({navigation}) => {

    //const navigation = useNavigation();

// HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE PAGE ZA MAGONJWA HUSIKA
const [ProductName, setProductName] = useState('');
    const move = (ProductName) =>{
      setProductName(ProductName);
      console.log(ProductName)
      navigation.navigate(ProductName);
    }
//INAISHIA HAPA HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
  

 
  
 const {width, height} = Dimensions.get('window');
 


    
//     const [BidhaaZetu, setBidhaaZetu] = useState([
//   {
//     ProductName:'Dona Safi',
//     ProductDescription:'Dona Safi',
//     ProductImage:require('../assets/l3.jpeg'),
//     id:'1'
//     },


//  {
//     ProductName:'Mchaichai',
//     ProductDescription:'Mchaichai',
//     ProductImage:require('../assets/l2.jpeg'),
//     id:'2'
//     },
//  {
//     ProductName:'Nyama',
//     ProductDescription:'Nyama',
//     ProductImage:require('../assets/l4.jpeg'),
//     id:'3'
//     },

//     {
//     ProductName:'Asali mbichi',
//     ProductDescription:'Asali Mbichi',
//     ProductImage:require('../assets/l6.jpeg'),
//     id:'4'
//     },
 
// {
//     ProductName:'Maharage',
//     ProductDescription:'Maharage',
//     ProductImage:require('../assets/l3.jpeg'),
//     id:'5'
//     },


//  {
//     ProductName:'Mchele',
//     ProductDescription:'Mchele',
//     ProductImage:require('../assets/l2.jpeg'),
//     id:'6'
//     },
//  {
//     ProductName:'Sembe safi',
//     ProductDescription:'Sembe safi',
//     ProductImage:require('../assets/l4.jpeg'),
//     id:'7'
//     },

//     {
//     ProductName:'Karanga',
//     ProductDescription:'Karanga',
//     ProductImage:require('../assets/l6.jpeg'),
//     id:'8'
//     },
 

  

 
//     ]);



 
  
    //FOR  APIS
const { datas:BidhaaZetu, isPending, error } = useFetch('https://lisheapisapp.pythonanywhere.com/Apis/BidhaaZetu/');









 const renderItem = ({item, index}) => {




 
    return (
      
      <MotiView
        style={globalStyles.BidhaaZetulistContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>


           <View style={globalStyles.BidhaaZetuimageContainer}>
        { item.ProductImage ? (
          <Image 
          // kama unatumia APIS
          source={{uri: item.ProductImage}}
          //source={item.ProductImage} 
          style={globalStyles.BidhaaZetuimage} 
          />
          ):(
          <Image 
          source={require('../assets/10243.png')}  
          style={globalStyles.BidhaaZetuimage} 
          />

          )}
        </View>

      
       

       
         <TouchableOpacity 
         
         >

          <View style={globalStyles.BidhaaZetubutton}>
            <Text style={globalStyles.BidhaaZetubuttonText}>{item.ProductName}</Text>
            </View>

        </TouchableOpacity>


      </MotiView>

          );
  };


















    return ( 


         <> 
{ isPending ? (

<View 
style={globalStyles.ActivityIndicatorContainer}
>
  
<Text style={globalStyles.ActivityIndicatorText}>Loading contents !!</Text>
 <ActivityIndicator size="large" color="green" /> 


 
  </View>
  ): (




        <View style={globalStyles.BidhaaZetuhomeComponentContainer}>







<TouchableOpacity>
<View style={globalStyles.BidhaaZetuHeaderContainer}>
<Text style={globalStyles.BidhaaZetuHeaderText}>BIDHAA ZETU</Text>
</View>
</TouchableOpacity>












      <FlatList
        data={BidhaaZetu}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        //horizontal
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    
























        </View>

        )}
  </>

  
     );
}
 
export default BidhaaZetuScreen;