import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
import LisheScreen from '../Lishe/LisheScreen';
// import BidhaaZetuScreen from '../BidhaaZetu/BidhaaZetuScreen';
// import ElimuLisheScreen from '../ElimuLishe/ElimuLisheScreen';



import { useNavigation } from '@react-navigation/native';


const {width,height} = Dimensions.get('window');



export default function HomeScreen() {

  
const [headerShownState, setheaderShownState] = useState(0);

 
  return (
    <View style={styles.container}>
  
   




<LisheScreen />








    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    
    width: width,
    height: height,
    // alignItems:'center',
 
  },





});