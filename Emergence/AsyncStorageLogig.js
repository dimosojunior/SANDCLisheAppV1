import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      // Fetch user data from AsyncStorage
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        if (parsedUserData.email === email && parsedUserData.password === password) {
          setIsLoggedIn(true);
          console.log("success")
        } else {
          alert('Invalid email or password');
        }
      } else {
        alert('User not found');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLoggedIn ? (
        <Text>Welcome to the app!</Text>
      ) : (
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
};

export default Login;
