import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
import LisheScreen from '../Lishe/LisheScreen';
import BidhaaZetuScreen from '../BidhaaZetu/BidhaaZetuScreen';
import ElimuLisheScreen from '../ElimuLishe/ElimuLisheScreen';



const {width,height} = Dimensions.get('window');



export default function HomeScreen() {

  const [LisheTab, setLisheTab] = useState(0);
  const [ElimuLisheTab, setElimuLisheTab] = useState(0);

const [BidhaaZetuTab, setBidhaaZetuTab] = useState(0);


  const [datas, setDatas2] = useState([
{
    ItemName:'WATOTO',
    ItemDescription:'Description 1',
    ItemImage:require('../assets/l6.jpeg'),
    status:'LISHE',
    id:'1'
    },

{
    ItemName:'FAMILIA',
    ItemDescription:'Description 2',
    ItemImage:require('../assets/l2.jpeg'),
    status:'LISHE',
    id:'2'
    },


{
    ItemName:'KISUKARI',
    ItemDescription:'Description 3',
    ItemImage:require('../assets/l3.jpeg'),
    status:'ELIMU YA LISHE',
    id:'3'
    },


{
    ItemName:'HIV',
    ItemDescription:'Description 4',
    ItemImage:require('../assets/l4.jpeg'),
    status:'BIDHAA ZETU',
    id:'4'
    },


    {
    ItemName:'WAJAWAZITO',
    ItemDescription:'Description 5',
    ItemImage:require('../assets/l5.jpg'),
    status:'BIDHAA ZETU',
    id:'5'
    },


    {
    ItemName:'UZITO ZAIDI',
    ItemDescription:'Description 6',
    ItemImage:require('../assets/l6.jpeg'),
    status:'LISHE',
    id:'6'
    },




 
    ]);





const pressOne =() => {
   setLisheTab(0);
  setElimuLisheTab(0)
  setBidhaaZetuTab(0)


}


const pressTwo =() => {
  setLisheTab(1);
  setElimuLisheTab(1)
  setBidhaaZetuTab(0)

}


const pressThree =() => {
  setLisheTab(1);
  setElimuLisheTab(0)
  setBidhaaZetuTab(1)

}





 
  return (
    <View style={styles.container}>
  
   



<View style={{
  width:'90%',
  alignSelf:'center',
  marginTop:0,
  height:60,
  backgroundColor:'#C0C0C0',
  borderWidth:0.5,
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









{ LisheTab == 0 ? <LisheScreen datas={datas}/> : null }
  




{ ElimuLisheTab == 1 ? <ElimuLisheScreen /> : null }
  



{ BidhaaZetuTab == 1 ? <BidhaaZetuScreen /> : null }














    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal:10,
    width: width,
    height: height,
    // alignItems:'center',
 
  },







 
  
BottomView: {
  position:'static',
  height:height/2 - 50,





},

BottomImage: {
width:width,
height:height/2-100,
marginVertical:5,
marginBottom:50,


},


itemsContainer:{
  flex:1,
  padding: 10,
  borderColor:'yellow',
  borderWidth:6,
  borderRadius:20,
  paddingHorizontal:20,
  justifyContent:'center',
  alignItems:'center',
  margin:10,




},
itemHeader:{
  color:'black',
  fontWeight:'bold',
  paddingVertical:15,
  fontSize:16,

},



});