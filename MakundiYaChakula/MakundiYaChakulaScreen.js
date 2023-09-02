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

const MakundiYaChakulaScreen = ({navigation}) => {

    //const navigation = useNavigation();

// HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE PAGE ZA MAGONJWA HUSIKA
const [FoodCategory, setFoodCategory] = useState('');
    const move = (FoodCategory) =>{
      setFoodCategory(FoodCategory);
      console.log(FoodCategory)
      navigation.navigate(FoodCategory);
    }
//INAISHIA HAPA HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
  

 
  
 const {width, height} = Dimensions.get('window');
 


    
 //    const [MakundiYaChakula, setMakundiYaChakula] = useState([
 //  {
 //    FoodCategory:'WANGA',
 //    Description:'This is Wanga',
 //    Image:require('../assets/l3.jpeg'),
 //    id:'1'
 //    },


 //    {
 //    FoodCategory:'PROTINI',
 //    Description:'This is Protini',
 //    Image:require('../assets/l4.jpeg'),
 //    id:'2'
 //    },
 // {
 //    FoodCategory:'VITAMINI',
 //    Description:'This is Vitamini',
 //    Image:require('../assets/l2.jpeg'),
 //    id:'3'
 //    },
 
  
  

 
 //    ]);



 
    //FOR  APIS
const { datas:MakundiYaChakula, isPending, error } = useFetch('https://lisheapisapp.pythonanywhere.com/Apis/MakundiYaChakula/');









 const renderItem = ({item, index}) => {




 
    return (


      
      <MotiView
        style={globalStyles.MakundiYaChakulalistContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>


         

      
       

       
         <TouchableOpacity 
         
         >

          <View style={globalStyles.MakundiYaChakulabutton}>
            <Text style={globalStyles.MakundiYaChakulabuttonText}>{item.FoodCategory}</Text>
            <Text style={globalStyles.MakundiYaChakulapriceText}>{item.Description}</Text>
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



        <View style={globalStyles.MakundiYaChakulahomeComponentContainer}>








<TouchableOpacity>
<View style={globalStyles.MakundiYaChakulaHeaderContainer}>
<Text style={globalStyles.MakundiYaChakulaHeaderText}>MAKUNDI YA CHAKULA</Text>
</View>
</TouchableOpacity>












      <FlatList
        data={MakundiYaChakula}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        //horizontal
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    
























        </View>

        )}
  </>
     );
}
 
export default MakundiYaChakulaScreen;