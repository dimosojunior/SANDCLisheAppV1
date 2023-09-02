import React, { useState, useEffect } from 'react';
import {
  View,
  Alert,
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Background from './PageStyling/Background';
import Btn from './PageStyling/Btn';
import { black } from './PageStyling/Constants';
import Field from './PageStyling/Field';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [profile_image, setProfileImage] = useState(null);
  const [error, setError] = useState(null); // State to hold the error message
const [isPending, setPending] =useState(false);

  const selectImage = async () => {
    // Add permission check here

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.75,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  const handleRegistration = async () => {

     // Reset the error message
    setError(null);

    // Validation checks
    if (!email || !password || !username || !phone) {
      setError('All fields are required');
      return;
    }
    setPending(true);

    try {
      // Create FormData with user data
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('username', username);
      formData.append('phone', phone);
      formData.append('profile_image', {
        uri: profile_image,
        name: 'profile_image.jpg',
        type: 'image/jpeg',
      });

      setPending(true);
      const response = await axios.post(
        'https://lisheapisapp.pythonanywhere.com/Account/register_user/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      Alert.alert('You have registered successfully');
      navigation.replace('Signin Stack');

      const token = response.data.token;
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setPending(false);
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
            marginTop:50,
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

           <Field
            placeholder="Phone number"
            value={phone}
        onChangeText={setPhone}

          />
        

  
          <Field placeholder="Password" secureTextEntry={true} 
          value={password}
        onChangeText={setPassword}
          />

           <TouchableOpacity
          onPress={selectImage}
          >
          
          
          <Btn textColor='white' bgColor={black} btnLabel="select Image" />
          

          
         </TouchableOpacity>

   
       { !isPending && 
          <TouchableOpacity
          onPress={handleRegistration}
          >
          
          
          <Btn textColor='white' bgColor={black} btnLabel="Signup" />
          

          
         </TouchableOpacity>}

      { isPending && 
          <TouchableOpacity
          // onPress={handleRegistration}
          >
          
          
          <Btn textColor='red' bgColor={black} btnLabel="Loading-----" />
          

          
         </TouchableOpacity>}





   {profile_image && (
        <Image source={{ uri: profile_image }} style={styles.profile_image} />
      )}


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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  profile_image: {
    width: 200,
    height: 200,
    marginVertical: 10,
    resizeMode: 'cover',
  },
});

export default Signup;
