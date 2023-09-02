import React, {useState,useContext, useEffect} from 'react';
import {
  View,
  RefreshControl,
  ActivityIndicator,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLOURS, Items} from '../database/Database';

import {MaterialIcons, Ionicons, FontAwesome} from '@expo/vector-icons';
import MainHeader from '../Headers/MainHeader';
import Card from '../Shared/Card';
import {globalStyles} from '../Styles/GlobalStyles';
import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';
import WajawazitoWeeksRenderedScreen from '../Screens/WajawazitoWeeksRenderedScreen';


const WajawazitoWiki3 = ({navigation}) => {

  //kwa ajili ya kurefresh pages
  const [refresh, setRefresh] = useState(false);

  const pullMe =() => {
    setRefresh(true)

    setTimeout (() => {
      setRefresh(false)
    }, 10)
  }

const {width,height} = Dimensions.get('window');

 
//     const [JeWajua, setJeWajua] = useState([
 
 
// {
//     Title:'WANGA',
//     Description:'Description 1',
//     ItemImage:require('../assets/10243.png'),
//     id:'1'
//     },

// {
//     Title:'PROTINI',
//     Description:'Description 2',
//     ItemImage:require('../assets/10243.png'),
//     id:'2'
//     },

 
//     ]);

 
 //FOR  APIS
const { datas:JeWajua } = useFetch('https://lisheapisapp.pythonanywhere.com/Lishe/JeWajuaWajawazitoWeek3/');










 // const [MatatizoUnayowezaKupata, setMatatizoUnayowezaKupata] = useState([
 //  {
 //    ProbemName:'Tumbo Kujaa Gesi',
 //    Description:'Description 1',
 //    ItemImage:require('../assets/10243.png'),
 //    id:'1'
 //    },


 // {
 //    ProbemName:'Kutapika mara kwa mara',
 //    Description:'Description 2',
 //    ItemImage:require('../assets/10242.png'),
 //    id:'2'
 //    },
 // {
 //    ProbemName:'Tumbo Kujaa Gesi',
 //    Description:'Description 1',
 //    ItemImage:require('../assets/10243.png'),
 //    id:'3'
 //    },


 
 //    ]);

//FOR  APIS
const { datas:MatatizoUnayowezaKupata } = useFetch('https://lisheapisapp.pythonanywhere.com/Lishe/MatatizoUnayowezaKupataWajawazitoWeek3/');



// const [TaarifaZaUjauzito, setTaarifaZaUjauzito] = useState([
//   {
//     Title:'Ujauzito Wa Mtoto',
//     Description:'Description 1',
//     InformationImage:require('../assets/10242.png'),
//     id:'1'
//     },

//      {
//     Title:'Mda Wa Ujauzito',
//     Description:'Wiki Moja',
//     InformationImage:require('../assets/10241.png'),
//     id:'2'
//     },

//  {
//     Title:'Uzito Kwa sasa',
//     Description:'0.3 kg',
//     InformationImage:require('../assets/10243.png'),
//     id:'3'
//     },



 
//     ]);


//FOR  APIS
const { datas:TaarifaZaUjauzito } = useFetch('https://lisheapisapp.pythonanywhere.com/Lishe/TaarifaZaUjauzitoWeek3/');











// const [Wajawazito, setWajawazito] = useState([
//   {
//     Time:'BREAKFAST',
//     Description:'Description 1',
//     FoodImage:require('../assets/10241.png'),
//     id:'1'
//     },

//    {
//     Time:'LUNCH',
//     Description:'Description 1',
//     FoodImage:require('../assets/l2.jpeg'),
//     id:'2'
//     },

//  {
//     Time:'DINNER',
//     Description:'Description 1',
//     FoodImage:require('../assets/l3.jpeg'),
//     id:'3'
//     },
 

 
//     ]);



 //FOR  APIS
const { datas:Wajawazito, isPending, error } = useFetch('https://lisheapisapp.pythonanywhere.com/Lishe/WajawazitoWeek3/');



  //create an product reusable card

  const JeWajuaCard = ({data}) => {
    return (

      <TouchableOpacity
    
        style={globalStyles.JeWajuaOpacity}>

        

        <Card>
        
        <View
        style={globalStyles.JeWajuaImageContainer}
          >
          
        
         { data.ItemImage ? (
          <Image
          style={globalStyles.JeWajuaImage}
            //source={data.ItemImage}
            source={{uri: data.ItemImage}}
                    />
            ):(

             <Image
             style={globalStyles.JeWajuaImage} 
          source={require('../assets/l2.jpeg')}  
          
          />
            )}
        </View>



        </Card>

        <View 
        style={globalStyles.JeWajuaTitleContainer}
        >
        <Text
        style={globalStyles.JeWajuaTitle}
          >
          {data.Title}
        </Text>

         <Text
         style={globalStyles.JeWajuaDescription}
          >
          {data.Description}
        </Text>

        </View>





        
      
      </TouchableOpacity>
    );
  };








  const MatatizoUnayowezaKupataCard = ({data}) => {
    return (
      <TouchableOpacity
      style={globalStyles.MatatizoUnayowezaKupataContainer}
    
      >

        <Card>
        <View
        style={globalStyles.MatatizoUnayowezaKupataImageContainer}
          >
          
        
         { data.ItemImage ? (
          <Image
           style={globalStyles.MatatizoUnayowezaKupataImage}
            //source={data.ItemImage}
            source={{uri: data.ItemImage}}
              />
              ):(

             <Image
             style={globalStyles.MatatizoUnayowezaKupataImage} 
          source={require('../assets/l2.jpeg')}  
          
          />
            )}
        </View>

        </Card>


        <View style={{
          marginTop:15,
          marginHorizontal:20,
        }}>
        <Text
         style={globalStyles.MatatizoUnayowezaKupataTitle}
          >
          {data.ProbemName}
        </Text>

         <Text
         style={globalStyles.MatatizoUnayowezaKupataDescription}
          >
          {data.Description}
        </Text>

        </View>




        
      
      </TouchableOpacity>
    );
  };









  const TaarifaZaUjauzitoCard = ({data}) => {
    return (
      <TouchableOpacity
      style={globalStyles.TaarifaZaUjauzitoContainer}
    
        >

      {/*mwanzo wa view kubwa*/}
        <View
         style={globalStyles.TaarifaZaUjauzitoContainerKubwa}
          >

{/*mwanzo wa view ya image na maelezo*/}

<Card>

        <View 
        style={globalStyles.TaarifaZaUjauzitoContainerNdogoYaRow}
        >

        { data.InformationImage ? (
            <Image

            style={globalStyles.TaarifaZaUjauzitoContainerImage}
            //source={data.InformationImage}
            source={{uri: data.InformationImage}}
           
          />
            ):(

             <Image
             style={globalStyles.TaarifaZaUjauzitoContainerImage} 
          source={require('../assets/l2.jpeg')}  
          
          />
            )}

          <View style={{
            flex:1,
          }}>
            <Text
            style={globalStyles.TaarifaZaUjauzitoContainerTitle} 

           >{data.Title}</Text>
            <Text 
            style={globalStyles.TaarifaZaUjauzitoContainerDescription}
           >{data.Description}</Text>
          </View>




          </View>
          </Card>
        {/*mwisho wa view ya image na maelezo*/}
         
        </View>
{/*mwisho wa view kubwa*/}




        
      
      </TouchableOpacity>
    );
  };








const WajawazitoCard = ({data}) => {
    return (
      <TouchableOpacity
      style={globalStyles.WajawazitoContainer} 
    
       >

      {/*mwanzo wa view kubwa*/}
        <View
        style={globalStyles.WajawazitoContainerKubwa} 
         >

{/*mwanzo wa view ya image na maelezo*/}

<Card>

        <View 
        style={globalStyles.WajawazitoContainerNdogoYaRow} 

       >
       { data.FoodImage ? (
            <Image
            style={globalStyles.WajawazitoContainerImage}
            //source={data.FoodImage}
            source={{uri: data.FoodImage}}
            
          />
          ):(

            <Image
             style={globalStyles.WajawazitoContainerImage} 
          source={require('../assets/l2.jpeg')}  
          
          />
            )}

          <View 
          style={globalStyles.WajawazitoContainerTimeTextContainer}
          >
            <Text 
            style={globalStyles.WajawazitoContainerTimeText}

            >{data.Time}</Text>
            <Text
             style={globalStyles.WajawazitoContainerDescription} 
           >{data.Description}</Text>
          </View>




          </View>
          </Card>
        {/*mwisho wa view ya image na maelezo*/}
         
        </View>
{/*mwisho wa view kubwa*/}




        
      
      </TouchableOpacity>
    );
  };






  return (
    <View
     style={globalStyles.MainContainer}
      >
     



      <ScrollView 
       refreshControl={
        <RefreshControl
        refreshing={refresh}
        onRefresh={() => pullMe()}
        />
       }
      showsVerticalScrollIndicator={false}>





{/*WAJAWAZITO*/}

 
        <View
        style={globalStyles.MainContainerNdogo}
          >
          <View
          style={globalStyles.MainContainerNdaniYaNdogo}
           >
            <View
            style={globalStyles.MainContainerTitleContainer}
             >
              <Card>
              <Text
              style={globalStyles.MainContainerTitleText}
               >
                WAJAWAZITO
              </Text>
              </Card>
             
            </View>
           
          </View>




<WajawazitoWeeksRenderedScreen />




{error && <Text style={globalStyles.ErrorMessage}
>error when fetching data</Text>}

{isPending && 

    <View 
style={globalStyles.ActivityIndicatorContainer}
>
  
<Text style={globalStyles.ActivityIndicatorText}>Loading contents !!</Text>
 <ActivityIndicator size="large" color="green" /> 


 
  </View>

}

{Wajawazito && Wajawazito.length > 0 ? (

                       <View
                style={globalStyles.MainContainerListFilterContainer}
                 >

                  {Wajawazito.map(data => {
                    return <WajawazitoCard data={data} key={data.id} />;
                  })}
                </View>

   ) :(
  <Text style={globalStyles.NoDataText}
  >No data for now</Text>


  )}              


                       </View>



















{/*TAARIFA ZA UJAUZITO*/}

 {TaarifaZaUjauzito && TaarifaZaUjauzito.length > 0 ? (
          <View
        style={globalStyles.MainContainerNdogo}
          >
          <View
          style={globalStyles.MainContainerNdaniYaNdogo}
           >
            <View
            style={globalStyles.MainContainerTitleContainer}
             >
              <Card>
              <Text
              style={globalStyles.MainContainerTitleText}
               >
                TAARIFA ZA UJAUZITO
              </Text>
              </Card>
             
            </View>
           
          </View>



          <View
          style={globalStyles.MainContainerListFilterContainer}
           >

            {TaarifaZaUjauzito.map(data => {
              return <TaarifaZaUjauzitoCard data={data} key={data.id} />;
            })}
          </View>


           






        </View>


 ) :(
  <Text style={globalStyles.NoDataText}
  ></Text>


  )}    









{/*JE WAJUA INAANZIA HAPA
        */}

         {JeWajua && JeWajua.length > 0 ? (
          <View
        style={globalStyles.MainContainerNdogo}
          >
          <View
          style={globalStyles.MainContainerNdaniYaNdogo}
           >
            <View
            style={globalStyles.MainContainerTitleContainer}
             >
              <Card>
              <Text
              style={[{marginBottom:20,},globalStyles.MainContainerTitleText]}
               >
                JE WAJUA ?
              </Text>
              </Card>
             
            </View>
           
          </View>




          <View
          style={globalStyles.MainContainerListFilterContainer}
           >

            {JeWajua.map(data => {
              return <JeWajuaCard data={data} key={data.id} />;
            })}
          </View>

              



        </View>


 ) :(
  <Text style={globalStyles.NoDataText}
  ></Text>


  )}  







{/*
DATAS MATATIZO UNAYOWEZA KUPATA ZINAANZIA HAPA*/}

{MatatizoUnayowezaKupata && MatatizoUnayowezaKupata.length > 0 ? (
         <View
          style={globalStyles.MainContainerNdogo}
          >
          <View
           style={globalStyles.MainContainerNdaniYaNdogo}
            >
            <View
              style={globalStyles.MainContainerTitleContainer}
              >

              <Card>
              <Text
               style={[{marginBottom:20,},globalStyles.MainContainerTitleText]}
                >
                MATATIZO UNAYOWEZA KUPATA
              </Text>
              </Card>
             
            </View>
           
          </View>




          <View
           style={globalStyles.MainContainerListFilterContainer}
            >
            {MatatizoUnayowezaKupata.map(data => {
              return <MatatizoUnayowezaKupataCard data={data} key={data.id} />;
            })}
          </View>


  


        </View>
           ) :(
  <Text style={globalStyles.NoDataText}
  ></Text>


  )} 
      </ScrollView>
    </View>
  );
};

export default WajawazitoWiki3;
