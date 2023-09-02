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


const ElimuLisheScreen = ({navigation}) => {

    //const navigation = useNavigation();

// HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE PAGE ZA MAGONJWA HUSIKA
const [Category, setCategory] = useState('');
    const move = (Category) =>{
      setCategory(Category);
      console.log(Category)
      navigation.navigate(Category);
    }
//INAISHIA HAPA HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
  

 
  
 const {width, height} = Dimensions.get('window');
 


    
 //    const [ElimuLishe, setElimuLishe] = useState([
 //  {
 //    CategoryName:'MAKUNDI YA CHAKULA',
 //    Description:'Description 1',
 //    Image:require('../assets/l2.jpeg'),
 //    id:'1'
 //    },

 // {
 //    CategoryName:'POSTER NA PICHA',
 //    Description:'Description 1',
 //    Image:require('../assets/l3.jpeg'),
 //    id:'2'
 //    },

  

 
 //    ]);



 
    //FOR  APIS
const { datas:ElimuLishe, isPending, error } = useFetch('https://lisheapisapp.pythonanywhere.com/Apis/ElimuYaLishe/');








 const renderItem = ({item, index}) => {




 
    return (


      
      <MotiView
        style={globalStyles.ElimuYaLishelistContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>

      
       


       
         <TouchableOpacity 
         onPress={() => move(item.Category)}>

          <View style={globalStyles.ElimuYaLishebutton}>
            <Text style={globalStyles.ElimuYaLishebuttonText}>{item.Category}</Text>
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



        <View style={globalStyles.ElimuYaLishehomeComponentContainer}>


















      <FlatList
        data={ElimuLishe}
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
 
export default ElimuLisheScreen;