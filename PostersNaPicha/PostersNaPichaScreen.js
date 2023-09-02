import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
import {MotiView} from 'moti';

import MainHeader from '../Headers/MainHeader';
import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';

const PostersNaPichaScreen = ({navigation}) => {

    //const navigation = useNavigation();

// HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE PAGE ZA MAGONJWA HUSIKA
const [ImageName, setImageName] = useState('');
    const move = (ImageName) =>{
      setImageName(ImageName);
      console.log(ImageName)
      navigation.navigate(ImageName);
    }
//INAISHIA HAPA HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
  

 
  
 const {width, height} = Dimensions.get('window');
 


    
 //    const [PostersNaPicha, setPostersNaPicha] = useState([
 //  {
 //    ImageName:'Picha 1',
 //    ImageDescription:'This is picha 1',
 //    Image:require('../assets/l3.jpeg'),
 //    id:'1'
 //    },

 // {
 //    ImageName:'Picha 2',
 //    ImageDescription:'This is picha 2',
 //    Image:require('../assets/l2.jpeg'),
 //    id:'2'
 //    },

 //    {
 //    ImageName:'Picha 3',
 //    ImageDescription:'This is picha 3',
 //    Image:require('../assets/l6.jpeg'),
 //    id:'3'
 //    },

 // {
 //    ImageName:'Picha 4',
 //    ImageDescription:'This is picha 4',
 //    Image:require('../assets/l4.jpeg'),
 //    id:'4'
 //    }, 

 //      {
 //    ImageName:'Picha 3',
 //    ImageDescription:'This is picha 3',
 //    Image:require('../assets/l6.jpeg'),
 //    id:'5'
 //    },

 // {
 //    ImageName:'Picha 6',
 //    ImageDescription:'This is picha 4',
 //    Image:require('../assets/l4.jpeg'),
 //    id:'6'
 //    }, 
  
 //  {
 //    ImageName:'Picha 7',
 //    ImageDescription:'This is picha 4',
 //    Image:require('../assets/l4.jpeg'),
 //    id:'7'
 //    }, 

 //      {
 //    ImageName:'Picha 8',
 //    ImageDescription:'This is picha 3',
 //    Image:require('../assets/l6.jpeg'),
 //    id:'8'
 //    },

 // {
 //    ImageName:'Picha 9',
 //    ImageDescription:'This is picha 4',
 //    Image:require('../assets/l4.jpeg'),
 //    id:'9'
 //    }, 

 
 //    ]);



 
  
    //FOR  APIS
const { datas:PostersNaPicha, isPending, error } = useFetch('https://lisheapisapp.pythonanywhere.com/Apis/PosterNaPicha/');









 const renderItem = ({item, index}) => {




 
    return (
      
      <MotiView
        style={globalStyles.PosterNaPichalistContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>


         

          <View style={globalStyles.PosterNaPichaimageContainer}>
        { item.Image ? (
          <Image 
          // kama unatumia APIS
          source={{uri: item.Image}}
          //source={item.Image} 
          style={globalStyles.PosterNaPichaimage} 
          />
          ):(
          <Image 
          source={require('../assets/10243.png')}  
          style={globalStyles.PosterNaPichaimage} 
          />

          )}
        </View>

      

       

       


      </MotiView>

          );
  };


















    return ( 


      <> 
{ isPending ? (

<View 
style={globalStyles.ActivityIndicatorContainer}
>
  
<Text style={globalStyles.ActivityIndicatorText}>Loading contents !!</Text>
 <ActivityIndicator size="large" color="green" /> 


 
  </View>
  ): (




        <View style={globalStyles.PosterNaPichahomeComponentContainer}>








<TouchableOpacity>
<View style={globalStyles.PosterNaPichaHeaderContainer}>
<Text style={globalStyles.PosterNaPichaHeaderText}>POSTER NA PICHA</Text>
</View>
</TouchableOpacity>













      <FlatList
        data={PostersNaPicha}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        //horizontal
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    
























        </View>

        )}
  </>
     );
}
 
export default PostersNaPichaScreen;