import React, { useState, useEffect } from 'react';

import {View,Alert, Text,Dimensions,ScrollView, Touchable, TouchableOpacity} from 'react-native';

import Background from './PageStyling/Background';
import Btn from './PageStyling/Btn';
import {black} from './PageStyling/Constants';
import Field from './PageStyling/Field';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const {width,height} = Dimensions.get('window');






  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            marginTop:30,
          }}>
          <Text style={{
            fontSize: 25, 
            color: 'black', 
            fontWeight: 'bold',
            marginBottom:20,
          }}>
            Login
          </Text>
       

          <Field
            placeholder="Username or email"
            keyboardType={'email-address'}
            onChangeText={(value) => setEmail(value)}

          />
          <Field placeholder="Password" secureTextEntry={true} 
          onChangeText={(value) => setPassword(value)}
          />
         

          <TouchableOpacity
          onPress={setData}
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
