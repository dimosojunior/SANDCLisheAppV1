import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Switch,TouchableOpacity,ScrollView, Text, View, Button, Image } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import {globalStyles} from '../Styles/GlobalStyles';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function ProfileScreen() {
  const navigation = useNavigation();

  // THIS IS FOR ASYNC STORAGE LOGIN


 const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data using the saved token
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          const response = await axios.get('https://lisheapisapp.pythonanywhere.com/Account/user_data/', {
            headers: {
              Authorization: `Token ${token}`,
            },
          });

          setUserData(response.data);
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchUserData();
  }, []);





const handleLogout = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
    console.log("Logout")
    // Redirect to the login screen
    navigation.replace('Home Stack'); // Replace 'Login' with your actual login screen route name
  } catch (error) {
    // Handle error
    console.log("Fail to Logout")
  }
};



 
  return (
    <View style={globalStyles.Profilecontainer}>
  
   
<ScrollView>


<TouchableOpacity>
<View style={globalStyles.ProfileTitleContainer}>
<Text style={globalStyles.ProfileTitle}>PROFILE</Text>
</View>
</TouchableOpacity>



   <View style={globalStyles.ProfilecontainerOne}>



<View  style={globalStyles.ProfileImageContainer}>
  
   <Image 
          source={require('../assets/me.jpg')}  
          style={globalStyles.ProfileImage} 
          />
</View>











<View style={globalStyles.ProfileDetails}>
  
  <Text style={globalStyles.ProfileName}>{userData.username}</Text>
   <Text style={globalStyles.ProfileBio}>Designer</Text>
</View>










<View  style={globalStyles.ProfileContactContainer}>
  <Text style={globalStyles.phone}>PHONE: {userData.phone}</Text>
   <Text style={globalStyles.email}>EMAIL: {userData.email}</Text>
  
</View>



</View>

</ScrollView>




 <View style={globalStyles.ProfilecontainerTwo}>

<TouchableOpacity onPress={handleLogout}>
<View style={globalStyles.SignoutContainer}>

 
<Text style={globalStyles.SignoutText}>SIGN OUT NOW</Text>

</View>
</TouchableOpacity>
  


</View>





    </View>
  );
}

const styles = StyleSheet.create({

});