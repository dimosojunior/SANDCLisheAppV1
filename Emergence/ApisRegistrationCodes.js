import React, { useState, useEffect } from 'react';

import {View,Alert,StyleSheet, Text,Dimensions,ScrollView, Touchable, TouchableOpacity} from 'react-native';

import Background from './PageStyling/Background';
import Btn from './PageStyling/Btn';
import {black} from './PageStyling/Constants';
import Field from './PageStyling/Field';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const {width,height} = Dimensions.get('window');


const [securePassword, setSecurePassword] = useState(true)
  const [email, setEmail] = useState("")
  const [first_name, setFirstName] = useState("")
   const [last_name, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [first_nameError, setFirst_nameError] = useState(false);
  const [last_nameError, setLast_nameError] = useState(false);

  const [usernameLength, setUsernameLength] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);




function handleLogin() {



  if (!username){
    setUsernameError(true);
  }else{
    setUsernameError(false);
  }

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

  if (!first_name){
    setFirst_nameError(true);
  }else{
    setFirst_nameError(false);
  }

  if (!last_name){
    setLast_nameError(true);
  }else{
    setLast_nameError(false);
  }

  if (password && password.length < 4){
    setPasswordLength(true);
  }else{
    setPasswordLength(false);
  }


   if (username && username.length < 4){
    setUsernameLength(true);
  }else{
    setUsernameLength(false);
  }



   if (!username || !email || !password || !first_name || !last_name ){
    return false
  }



  // if (last_name === username){
  //   setLast_nameUsernameError(true);
  // }

    //setError("")

    let body = JSON.stringify({
      'email': email.toLowerCase(),
      'username': username,
      'first_name': first_name,
      'last_name': last_name,
      'password': password
    })

    fetch('https://lisheapisapp.pythonanywhere.com/Account/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:body
      })
      .then(res => {
        if (res.ok) {
          return res.json()
          
        } else {
          //setError("User already exists")
          throw res.json()
          Alert.alert("Registered Failed, Fill informations correctly");

        }
      })
      .then(json => {
        // setUserObj(json)
        // setToken(json.token)
        // setIsLoggedIn(true)
        console.log("SUCCESSFULLY")
        Alert.alert("You have registered Successfully");
          navigation.navigate('Home Stack')
      })
      .catch(error => {
        console.log(error)
      })

  }


    // useEffect(() => {
    //     getData();
    // }, []);

    // const getData = () => {
    //     try {
    //         AsyncStorage.getItem('UserData')
    //             .then(value => {
    //                 if (value != null) {
    //                     navigation.replace('Home Stack');
    //                 }
    //             })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const setData = async () => {
    //     if (email.length == 0 || password.length == 0) {
    //         Alert.alert('Warning!', 'Please write your data.')
    //     } else {
    //         try {
    //             var user = {
    //                 Email: email,
    //                 Password: password
    //             }
    //             await AsyncStorage.setItem('UserData', JSON.stringify(user));
    //             navigation.replace('Home Stack');
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }







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
            placeholder="First Name"
            //keyboardType={'email-address'}
            //onChangeText={(value) => setEmail(value)}
            value={first_name} onChangeText={text => setFirstName(text)}

          />

  { first_nameError ? <Text style={styles.errorText
  }>Please enter  your first name</Text>:null}


<Field
           placeholder="Last name"
            //keyboardType={'email-address'}
            //onChangeText={(value) => setEmail(value)}
            value={last_name} onChangeText={text => setLastName(text)}

          />

          { last_nameError ? <Text style={styles.errorText
  }>Please enter your last name</Text>:null}

          <Field
            placeholder="email"
            keyboardType={'email-address'}
            //onChangeText={(value) => setEmail(value)}
            value={email} onChangeText={text => setEmail(text)}

          />

          { emailError ? <Text style={styles.errorText
  }>Please enter valid email</Text>:null}


           <Field
            placeholder="Username"
            
            //onChangeText={(value) => setEmail(value)}
            value={username} onChangeText={text => setUsername(text)}

          />
          { usernameError ? <Text style={styles.errorText
  }>Please enter your  username</Text>:null}

  { usernameLength ? <Text style={styles.errorText
  }>Username must contain more than 4 characters</Text>:null}

          <Field placeholder="Password" secureTextEntry={true} 
          //onChangeText={(value) => setPassword(value)}
          value={password} onChangeText={text => setPassword(text)}
          />

          { passwordError ? <Text style={styles.errorText
  }>Please enter  password</Text>:null}

  { passwordLength ? <Text style={styles.errorText
  }>Password must contain more than 4 characters</Text>:null}
         

          <TouchableOpacity
          // onPress={setData}
          onPress={() => handleLogin()}
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
            <Text style={{ color: black, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>

        
 </ScrollView>
      </View>

   
  );
};

export default Signup;
const styles = StyleSheet.create({
  errorText: {
    color:'red',
    textAlign:'center'
    
 
  },





});