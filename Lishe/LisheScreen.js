import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,RefreshControl, Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
import {MotiView} from 'moti';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../Headers/MainHeader';

import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';



const LisheScreen = () => {

//kwa ajili ya kurefresh pages
  const [refresh, setRefresh] = useState(false);

  const pullMe =() => {
    setRefresh(true)

    setTimeout (() => {
      setRefresh(false)
    }, 10)
  }

//     const [datas, setDatas2] = useState([
// {
//     ItemName:'WATOTO',
//     ItemDescription:'Description 1',
//     ItemImage:require('../assets/l6.jpeg'),
//     status:'LISHE',
//     id:'1'
//     },

// {
//     ItemName:'FAMILIA',
//     ItemDescription:'Description 2',
//     ItemImage:require('../assets/l2.jpeg'),
//     status:'LISHE',
//     id:'2'
//     },


// {
//     ItemName:'KISUKARI',
//     ItemDescription:'Description 3',
//     ItemImage:require('../assets/l3.jpeg'),
//     status:'ELIMU YA LISHE',
//     id:'3'
//     },


// {
//     ItemName:'HIV',
//     ItemDescription:'Description 4',
//     ItemImage:require('../assets/l4.jpeg'),
//     status:'BIDHAA ZETU',
//     id:'4'
//     },


//     {
//     ItemName:'WAJAWAZITO',
//     ItemDescription:'Description 5',
//     ItemImage:require('../assets/l5.jpg'),
//     status:'BIDHAA ZETU',
//     id:'5'
//     },


//     {
//     ItemName:'UZITO ZAIDI',
//     ItemDescription:'Description 6',
//     ItemImage:require('../assets/l6.jpeg'),
//     status:'LISHE',
//     id:'6'
//     },





 
//     ]);



    const navigation = useNavigation();

// HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE PAGE ZA MAGONJWA HUSIKA
const [ItemName, setItemName] = useState('');
    const move = (ItemName) =>{
      setItemName(ItemName);
      console.log(ItemName)
      navigation.navigate(ItemName);
    }
//INAISHIA HAPA HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
  

 
  
 const {width, height} = Dimensions.get('window');
 


  

   //FOR  APIS
const { datas:datas, isPending, error } = useFetch('https://lisheapisapp.pythonanywhere.com/Apis/Lishe/');







 const renderItem = ({item, index}) => {




 
    return (
      
      <MotiView
        style={globalStyles.CategorylistContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>

      
       

       
         <TouchableOpacity 
         onPress={() => move(item.ItemName)}>

          <View style={globalStyles.Categorybutton}>
            <Text style={globalStyles.CategorybuttonText}>{item.ItemName}</Text>
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



        <View style={globalStyles.CategoryhomeComponentContainer}>















<View style={globalStyles.LisheFlatListContainer}>


      <FlatList

        data={datas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        //horizontal
        numColumns={3}
        showsVerticalScrollIndicator={false}

         refreshControl={
        <RefreshControl
        refreshing={refresh}
        onRefresh={() => pullMe()}
        />
       }
       
      />
    

</View>





<View style={globalStyles.LisheFlatListImageContainer}>

 <Image 
          source={require('../assets/l6.jpeg')}  
          style={globalStyles.LisheFlatListImage} 
          />

</View>
















        </View>

        )}

  </>
     );
}
 
export default LisheScreen;