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
   const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);
      }
    } catch (error) {
      console.log(error);
    }
  };
 //ila hii mpk urefresh ndo inabadilika informations user aki login
  // const handleLogout = async () => {
  //       try {
  //           await AsyncStorage.clear();
  //           navigation.navigate('Signin Stack');
  //       } catch (error) {
  //           console.log(error);
  //       }
  //   }


const handleLogout = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
    console.log("Logout")
    
    navigation.replace('Signin Stack'); // Replace 'Login' with your actual login screen route name
  } catch (error) {
    
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
  
{userData ? 
   <Image 
          //source={require('../assets/me.jpg')}
          source={{uri:"https://lisheapisapp.pythonanywhere.com/"+userData.profile_image }}

          style={globalStyles.ProfileImage} 
          />
  : ''}
</View>











<View style={globalStyles.ProfileDetails}>
  
 {/* <Text style={globalStyles.ProfileName}>{userData.username}</Text>*/}
 <Text style={globalStyles.ProfileName}>{userData ? userData.username : ''}</Text>

   <Text style={globalStyles.ProfileBio}>{userData ? userData.company_name : ''}</Text>
</View>










<View  style={globalStyles.ProfileContactContainer}>
  <Text style={globalStyles.phone}>PHONE: {userData ? userData.phone : ''}</Text>
   <Text style={globalStyles.email}>EMAIL: {userData ? userData.email : ''}</Text>
  
</View>



</View>

</ScrollView>



<TouchableOpacity onPress={handleLogout}>
 <View style={globalStyles.ProfilecontainerTwo}>


<View style={globalStyles.SignoutContainer}>

 
<Text style={globalStyles.SignoutText}>SIGN OUT NOW</Text>

</View>

  


</View>
</TouchableOpacity>




    </View>
  );
}

const styles = StyleSheet.create({

});