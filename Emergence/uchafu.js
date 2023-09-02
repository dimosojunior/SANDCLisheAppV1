import React, { useState, useEffect } from 'react';

import {View,Alert,StyleSheet, Text,Dimensions,ScrollView, Touchable, TouchableOpacity} from 'react-native';

import Background from './PageStyling/Background';
import Btn from './PageStyling/Btn';
import {black} from './PageStyling/Constants';
import Field from './PageStyling/Field';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';
const Signup = ({navigation}) => {
  const {width,height} = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null); // State to hold the error message



  const options={
    title:'Select Image',
    type:'library',
    options:{
      maxHeight:200,
      maxWidth:200,
      selectionLimit:1,
      mediaType:'photo',
      includeBase64:false,
    }
  }

  const handleImagePick = async() => {
    const images = await launchImageLibrary(options);
    console.log(images);
    
      };




  const handleRegistration = async () => {
    // Reset the error message
    setError(null);

    // Validation checks
    if (!email || !password || !username) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post('https://lisheapisapp.pythonanywhere.com/Account/register_user/', {
        email: email,
        password: password,
        username: username,
      });
      Alert.alert("You have registered Successfully");
      navigation.replace('Signin Stack');

      const token = response.data.token; // Extract the token from the response
      // You can now save the token to your app's state, AsyncStorage, or Redux store
    } catch (error) {
      if (error.response) {
        if (error.response.data.email) {
          setError('Email already exists');
        } else if (error.response.data.username) {
          setError('Username already exists');
        }
      } else {
        setError('Registration error. Please try again later.');
      }
    }
  };

  return (
   
      


     <View style={{
        alignItems: 'center',
         width: width,
         justifyContent:'center',
         flex:1,
         backgroundColor:'white',

       }}>

       <Text style={{
            fontSize: 25, 
            color: 'black', 
            fontWeight: 'bold',
            marginBottom:20,
          }}>
            Signup
          </Text>

          {error && <Text style={{ color: 'red' }}>{error}</Text>}
       <ScrollView>


  
        <View
          style={{
            // backgroundColor: 'rgb(5,5,49)',
            
            // justifyContent:'center',
            height: height,
            width: width,
            borderTopLeftRadius: 0,
            paddingTop: 10,
            alignItems: 'center',
            marginTop:10,
          }}>
          
       
          <Field
            placeholder="email"
            keyboardType={'email-address'}
            value={email}
        onChangeText={setEmail}

          />

      
           <Field
            placeholder="Username"
            value={username}
        onChangeText={setUsername}

          />
        

  
          <Field placeholder="Password" secureTextEntry={true} 
          value={password}
        onChangeText={setPassword}
          />

          <TouchableOpacity
          // onPress={setData}
          onPress={handleImagePick}
          >
          
          
          <Btn textColor='white' bgColor={black} btnLabel="Choose Image" />
          

          
         </TouchableOpacity>

   
          <TouchableOpacity
          // onPress={setData}
          onPress={() => handleRegistration()}
          >
          
          
          <Btn textColor='white' bgColor={black} btnLabel="Signup" />
          

          
         </TouchableOpacity>

          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ 
              fontSize: 16, 
              fontWeight:"bold",
              color:'red',
             }}>Already have an account ? </Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate("Signin Stack")}
            >
            <Text style={{ color: black, fontWeight: 'bold', fontSize: 16 }}>Signin</Text>
            </TouchableOpacity>
          </View>
        </View>

        
 </ScrollView>
      </View>

  );
};

export default Signup;
