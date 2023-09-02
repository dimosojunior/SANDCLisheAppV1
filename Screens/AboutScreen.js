import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,RefreshControl,
  ActivityIndicator,ScrollView,Linking, Switch,TouchableOpacity, Text, View, Button, Image } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import {globalStyles} from '../Styles/GlobalStyles';
import { MaterialIcons} from '@expo/vector-icons';
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';


export default function AboutScreen() {

     //FOR  APIS
const { datas:AboutUs, isPending, error } = useFetch('https://lisheapisapp.pythonanywhere.com/Lishe/AboutUs/');


  const MyNumber = '+255628431507'
const MyName = "Dimoso Junior"
const message = "Welcome To My App"
const MyEmail = "juniordimoso8@gmail.com"
const MyGithub = "https://github.com/dimosojunior"
const MyWhatsapp = "juniordimoso8@gmail.com"
const MyYoutube = "www.youtube.com"
const MyFacebook = "www.facebook.com"

const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this url: ${url}`);
        }
    }







const AboutUsCard = ({data}) => {

    return (



<View>
  



   <View style={globalStyles.AboutcontainerOne}>
   <ScrollView >

<TouchableOpacity>
<View style={globalStyles.AboutTitleContainer}>
<Text style={globalStyles.AboutTitle}>ABOUT US</Text>
</View>
</TouchableOpacity>







<View style={globalStyles.DescriptionContainer}>
<Text style={globalStyles.Description}>
{data.Description}


</Text>
</View>


{/*mwanzo wa AboutInformationContainer*/}

<View style={globalStyles.AboutInformationContainer}>
<Text style={globalStyles.AboutInformation}>
CONTACT
</Text>



<View style={globalStyles.NumbersContainer}>
<Text style={globalStyles.Number1}>
{data.Phone1}
</Text>
<Text style={globalStyles.Number2}>
{data.Phone2}
</Text> 
</View>



<Text style={globalStyles.AboutInformation}>
SOCIAL MEDIA
</Text>





</View>
{/*mwisho wa AboutInformationContainer*/}






{/*mwanzo wa LinksContainer*/}
<View style={globalStyles.LinksContainer}>

<Text style={globalStyles.Link}>
<TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() => {Linking.openURL(MyYoutube)}}>
        <FontAwesome name='youtube' 
      size={35} color='red' style={globalStyles.iconStyle} />
        </TouchableOpacity>
</Text>


<Text style={globalStyles.Link}>
 <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() => {Linking.openURL(`whatsapp://send?phone=${MyNumber}&text=${message}`)}}>
        <FontAwesome name='whatsapp' 
      size={35} color='green' style={globalStyles.iconStyle} />
        </TouchableOpacity>
</Text> 


<Text style={globalStyles.Link}>
 <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() =>
            openUrl(MyGithub)
          }>

          <FontAwesome name='github' 
      size={35} color='blue' style={globalStyles.iconStyle} />
        </TouchableOpacity>
</Text> 

<Text style={globalStyles.Link}>
 <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() =>
            openUrl(MyFacebook)
          }>

          <FontAwesome name='facebook' 
      size={35} color='blue' style={globalStyles.iconStyle} />
        </TouchableOpacity>
</Text> 




<Text style={globalStyles.Link}>
 <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() =>
            Linking.openURL(`mailto:${MyEmail}?subject=Hello ${MyName}&body=${message}`)
          }>
        <MaterialIcons name='email' 
      size={35} color='red' style={globalStyles.iconStyle} />
        </TouchableOpacity>
</Text> 






</View>
{/*mwisho wa LinksContainer*/}





<View style={globalStyles.AppNameContainer}>
<Text style={globalStyles.AppName}>
{data.AppName}
</Text>

</View>
</ScrollView>

</View>
{/*mwisho wa AboutcontainerOne*/}






 <View style={globalStyles.AboutcontainerTwo}>

<View style={globalStyles.FeelFreeContainer}>
<Text style={globalStyles.FeelFree}>
FEEL FREE TO CONTACT US 24/7
</Text>
</View>

</View>




</View>




)}












 
  return (
    <View style={styles.Aboutcontainer}>
  
   
   
{AboutUs && AboutUs.length > 0 ? (

                       <View
                style={globalStyles.MainContainerListFilterContainer}
                 >

                  {AboutUs.map(data => {
                    return <AboutUsCard data={data} key={data.id} />;
                  })}
                </View>

   ) :(
  <Text style={globalStyles.NoDataText}
  >No data for now</Text>


  )} 




    </View>
  );
}

const styles = StyleSheet.create({
  
});