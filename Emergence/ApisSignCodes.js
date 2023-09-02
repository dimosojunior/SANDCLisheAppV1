import React, { useState, useEffect } from 'react';

import {View,Alert,StyleSheet, Text,Dimensions,ScrollView, Touchable, TouchableOpacity} from 'react-native';

import Background from './PageStyling/Background';
import Btn from './PageStyling/Btn';
import {black} from './PageStyling/Constants';
import LoginField from './PageStyling/LoginField';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const {width,height} = Dimensions.get('window');




  const [error, setError] = useState("")

const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);




  // const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.replace('Home Stack');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (email.length == 0 || password.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Email: email,
                    Password: password
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.replace('Home Stack');
            } catch (error) {
                console.log(error);
            }
        }
    }


  function handleLogin() {

    if (!email){
    setEmailError(true);
  }else{
    setEmailError(false);
  }


  if (!password){
    setPasswordError(true);
  }else{
    setPasswordError(false);
  }

  if (!email || !password ){
    return false
  }


    setError("")

    let body = JSON.stringify({
      'email': email.toLowerCase(),
      'password': password
    })

    fetch('https://lisheapisapp.pythonanywhere.com/Account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:body
      })
      .then(res => {
        if (res.ok) {
          return res.json()
          navigation.navigate('Home Stack')
        } else {
          setError("Invalid Credentials")
          throw res.json()
        }
      })
      .then(json => {
        // setUserObj(json)
        // setToken(json.token)
        // setIsLoggedIn(true)
        //Alert.alert("You have registered Successfully");
        //navigation.navigate('Home Stack')
      })
      .catch(error => {
        console.log(error)
        Alert.alert("Invalid Credentials");
      })

  }






  return (
    
    <ScrollView>
      <View style={{
        alignItems: 'center',
         width: width,
         justifyContent:'center',
         flex:1,
         backgroundColor:'white',

       }}>
       
  
        <View
          style={{
            // backgroundColor: 'rgb(5,5,49)',
            
            // justifyContent:'center',
            height: height,
            width: width,
            borderTopLeftRadius: 0,
            paddingTop: 10,
            alignItems: 'center',
            marginTop:80,
              //justifyContent:'center',
          }}>
          <Text style={{
            fontSize: 25, 
            color: 'black', 
            fontWeight: 'bold',
            marginBottom:20,

          }}>
            Login
          </Text>
       

          <LoginField
            placeholder="Email"
            keyboardType={'email-address'}
            onChangeText={(value) => setEmail(value)}

          />

                { emailError ? <Text style={styles.errorText
  }>Please enter correct valid email</Text>:null}


          <LoginField placeholder="Password" secureTextEntry={true} 
          onChangeText={(value) => setPassword(value)}
          />
             { passwordError ? <Text style={styles.errorText
  }>Please enter correct  password</Text>:null}
       

          <TouchableOpacity
          // onPress={setData}
          onPress={() => handleLogin()}
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

        

      </View>

    </ScrollView>
  );
};

export default Login;
const styles = StyleSheet.create({
  errorText: {
    color:'red',
    textAlign:'center'
    
 
  },





});