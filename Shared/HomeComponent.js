import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { StyleSheet, Text,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';
import {globalStyles} from '../Styles/GlobalStyles';

import { MaterialIcons } from '@expo/vector-icons';
import useFetch from '../useFetch';
import axios from 'axios';


import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MotiView} from 'moti';



// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';

const HomeComponent =({datas}) => {

// To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)


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
 



//FONTS

 
// MWANZO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE


  const renderItem = ({item, index}) => {




 
    return (
      
      <MotiView
        style={[globalStyles.listContainer,{backgroundColor:theme.backgroundColor}]}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>

      
        <View style={globalStyles.imageContainer}>
        { item.ItemImage ? (
          <Image 
          // kama unatumia APIS
          //source={{uri: item.ItemImage}}
          source={item.ItemImage} 
          style={globalStyles.image} 
          />
          ):(
          <Image 
          source={require('../assets/10243.png')}  
          style={globalStyles.image} 
          />

          )}
        </View>

        <Text style={[globalStyles.nameText,{color:theme.color}]}>{item.ItemName}</Text>
        <Text style={[globalStyles.priceText,{color:theme.color}]}>{item.price}</Text>
         
         <TouchableOpacity 
         onPress={() => move(item.ItemName)}>

          <View style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>View</Text>
          </View>

        </TouchableOpacity>


      </MotiView>

          );
  };

// MWISHO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE



  return (



    <View style={[globalStyles.homeComponentContainer, {backgroundColor:theme.backgroundColor}]}>
    





<TouchableOpacity>
<Text style={[globalStyles.homeComponentHeaderText,{color:theme.color}]}>ALL DISEASES</Text>
</TouchableOpacity>
















{/*{MWANZO WA FLAT LIST COLUMN MBILI}*/}
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        //horizontal
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>




  );
};






  
export default HomeComponent;



const styles = StyleSheet.create({
 
});