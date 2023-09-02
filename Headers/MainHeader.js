import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
// import LisheScreen from '../Lishe/LisheScreen';
// import BidhaaZetuScreen from '../BidhaaZetu/BidhaaZetuScreen';
// import ElimuLisheScreen from '../ElimuLishe/ElimuLisheScreen';

import { useNavigation } from '@react-navigation/native';


const {width,height} = Dimensions.get('window');



export default function MainHeader() {
  const navigation = useNavigation();

  const [LisheTab, setLisheTab] = useState(0);
  const [ElimuLisheTab, setElimuLisheTab] = useState(0);

const [BidhaaZetuTab, setBidhaaZetuTab] = useState(0);


 



const pressOne =() => {
   setLisheTab(0);
  setElimuLisheTab(0)
  setBidhaaZetuTab(0)
  navigation.navigate('LISHE')


}


const pressTwo =() => {
  setLisheTab(1);
  setElimuLisheTab(1)
  setBidhaaZetuTab(0)
  navigation.navigate('ELIMU YA LISHE')

}


const pressThree =() => {
  setLisheTab(1);
  setElimuLisheTab(0)
  setBidhaaZetuTab(1)
  navigation.navigate('BIDHAA ZETU')

}





 
  return (
    <View style={styles.container}>
  
   



<View style={{
  width:'90%',
  alignSelf:'center',
  marginTop:0,
  height:60,
  backgroundColor:'#C0C0C0',
  borderWidth:0,
  borderRadius:15,
  flexDirection:'row',
  alignItems:'center',
  paddingLeft:0,
  paddingRight:0,
}}>

<TouchableOpacity style={{
  paddingHorizontal:10,
  height:'100%',
  backgroundColor: LisheTab == 0 ? 'yellow' : '#C0C0C0',
  borderRadius:8,
  paddingHorizontal:10,
  justifyContent:'center',
  alignItems:'center',
}}
onPress={pressOne}>

  <Text style={{
    color:LisheTab == 0 ? 'black' : '#000',
    fontWeight:'700',
    fontSize:14,
  }}>LISHE</Text>
</TouchableOpacity>



<TouchableOpacity style={{
  paddingHorizontal:10,
  height:50,
  backgroundColor: ElimuLisheTab == 1 ? 'yellow' : '#C0C0C0',
  borderRadius:15,
  justifyContent:'center',
  alignItems:'center',
}}
onPress={pressTwo}

>
  <Text style={{
    color:ElimuLisheTab == 1 ? 'black' : '#000',
    fontWeight:'700',
    fontSize:14,
  }}>ELIMU YA LISHE</Text>
</TouchableOpacity>


<TouchableOpacity style={{
  paddingHorizontal:10,
  height:50,
  backgroundColor: BidhaaZetuTab == 1 ? 'yellow' : '#C0C0C0',
  borderRadius:15,
  justifyContent:'center',
  alignItems:'center',
}}
onPress={pressThree}
>
  <Text style={{
    color:BidhaaZetuTab == 1 ? 'black' : '#000',
    fontWeight:'700',
    fontSize:14,
  }}>BIDHAA ZETU</Text>
</TouchableOpacity>
  

</View>

















    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    // alignItems:'center',
 
  },










});