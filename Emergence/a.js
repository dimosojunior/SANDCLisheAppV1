import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);


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
    setError(null);

    if (!email || !password || !username) {
      setError('All fields are required');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('username', username);
      formData.append('profile_image', {
        uri: image,
        name: 'profile.jpg',
        type: 'image/jpg',
      });

      const response = await axios.post(
        'https://lisheapisapp.pythonanywhere.com/Account/register_user/',
        formData
      );

      Alert.alert('You have registered Successfully');
      navigation.replace('Signin Stack');

      const token = response.data.token;
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
    <View>
      {/* Other components */}
      <TouchableOpacity onPress={handleImagePick}>
        <Text>Select Profile Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
      {/* Rest of your components */}
    </View>
  );
};

export default Signup;
