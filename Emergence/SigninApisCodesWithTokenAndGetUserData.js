import React, { useState, useEffect } from 'react';

import {View,Alert,StyleSheet, Text,Dimensions,ScrollView, Touchable, TouchableOpacity} from 'react-native';

import Background from './PageStyling/Background';
import Btn from './PageStyling/Btn';
import {black} from './PageStyling/Constants';
import LoginField from './PageStyling/LoginField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const { width, height } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      // User is logged in, fetch user data and navigate to Home Stack
      try {
        const userResponse = await axios.get('https://lisheapisapp.pythonanywhere.com/Account/user_data/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        const userData = userResponse.data;
        navigation.replace('Home Stack', { userData });
      } catch (error) {
        // Handle error if fetching user data fails
        console.log(error);
      }
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('https://lisheapisapp.pythonanywhere.com/Account/login_user/', {
        email: email,
        password: password,
      });

      const token = response.data.token;
      await AsyncStorage.setItem('userToken', token);

      // Now, make another request to get user data
      const userResponse = await axios.get('https://lisheapisapp.pythonanywhere.com/Account/user_data/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      const userData = userResponse.data;
       // Save user data to AsyncStorage
    await AsyncStorage.setItem('userData', JSON.stringify(userData));


      // Pass the userData to Home Stack
      navigation.replace('Home Stack', { userData });
    } catch (error) {
      setError('Invalid credentials');
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
            marginTop:60,
          }}>
          <Text style={{
            fontSize: 25, 
            color: 'black', 
            fontWeight: 'bold',
            marginBottom:20,
          }}>
            Login
          </Text>

           <Text style={styles.errorText}>{error}</Text>

       

          <LoginField
            placeholder="Enter valid email"
            keyboardType={'email-address'}
            value={email}
        onChangeText={text => setEmail(text)}

          />
          <LoginField placeholder="Enter Password" secureTextEntry={true} 
         
        value={password}
        onChangeText={text => setPassword(text)}
        
          />
         

          <TouchableOpacity
          onPress={handleLogin}
          >
          
          
          <Btn textColor='white' bgColor={black} btnLabel="Login" />
          

          
         </TouchableOpacity>

          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ 
              fontSize: 16, 
              fontWeight:"bold",
              color:'red',
             }}>Don't have an account ? </Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate("Signup Stack")}
            >
            <Text style={{ color: black, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>

      
</ScrollView>

      </View>

      




   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Login;
