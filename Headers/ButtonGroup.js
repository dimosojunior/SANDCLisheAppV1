import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,ScrollView,Linking, Switch,TouchableOpacity, Text, View, Button, Image } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import {globalStyles} from '../Styles/GlobalStyles';
import { MaterialIcons} from '@expo/vector-icons';
import { Ionicons, FontAwesome} from '@expo/vector-icons';


export const ButtonGroup = ({
	buttons,
	doSomethingAfterClick}) => {

	const [clickedId, setClickedId]  = useState(0)

	const handleClick = (item, id) => {
		setClickedId(id)
		doSomethingAfterClick(item)
	}

	return (

		<View style={styles.container}>

		{
			buttons.map((buttonLabel, index) => {
				return (

			<TouchableOpacity 
			onPress ={(item) => handleClick(item, index)}
			key={index}
			style={[
				index === clickedId ? styles.buttonActive : styles.button,
				index === 0? {borderTopLeftRadius: 10, borderBottomLeftRadius:10} : "",
				index === 2? {borderTopLeftRadius: 10, borderBottomLeftRadius:10} : ""
				]}>
			<Text style={index === clickedId ? styles.textActive : styles.text}>
			{buttonLabel}</Text>
		</TouchableOpacity>


					)
			})
		}

		

		

			
		</View>

		)
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    flexDirection:'row'
  },
  button:{
  	flex:1,
  	height:50,
  	alignItems:'center',
  	justifyContent:'center',
  	backgroundColor:'red',
  	borderWidth:0.5,
  	borderColor:'black',
  },
  text:{
  	color:'black',

  },

  buttonActive:{
  	flex:1,
  	height:50,
  	alignItems:'center',
  	justifyContent:'center',
  	backgroundColor:'black',
  	borderWidth:0.5,
  	borderColor:'black',

  },
  textActive:{
  	color:'white',
  }
});