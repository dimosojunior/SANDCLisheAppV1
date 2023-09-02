import React from 'react';
import { StyleSheet, Text,Dimensions, View, Button } from 'react-native';




const {height, width} = Dimensions.get('window');

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;


const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

 
const GlobalStyles =() => {



  return(

    <View>
      <Text>Gloal Styles</Text>
    </View>
    );


}
export default GlobalStyles;


export const globalStyles = StyleSheet.create({






//---------------------ACTIVITY INDICATOR-------------

ActivityIndicatorContainer:{
  // justifyContent:'center',
  alignItems:'center',
  marginTop:0,

 height:height,
 backgroundColor:'white',

},
ActivityIndicatorText:{
  color:'red',
  marginBottom:15,
  marginTop:20,
  fontSize:18,
  fontWeight:'bold',


},




//-----------PAGES MESSAGES AND ERRORS

NoDataText:{
  color:'green',
  fontSize:16,
  fontWeight:'bold',
  textAlign:'center',

},

ErrorMessage:{
  color:'red',
  fontSize:18,
  fontWeight:'bold',
  textAlign:'center',

},






//    ---------------------- ALL HOMESCREEN STYLES------------------------------------------
    


homeContainer: {
    // flex: 1,
    width:width,
    height:height,
   
    
  },








  //-----------------------HEADER.JS------------------


   headerHeaderFile: {      
        width:Dimensions.get('window').width,
        height:70,
        flexDirection: 'row',
        
        // alignItems: 'flex-start',
        marginLeft:0,
        paddingLeft:0,
        //backgroundColor: 'black',  //"#2B3856",
        marginBottom:10,
        
        justifyContent:'space-between',
        //elevation:18,
    
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:1,
    shadowRadius:2,
    marginHorizontal:0,
    marginVertical:0,
    paddingHorizontal:0,

        //paddingVertical:15,
        
        


    },
    headerTextHeaderFile: {
      //fontWeight: 'bold',
      fontSize: 18,
      color: 'white',
      letterSpacing: 1,

      // flex:1,
      alignItems:"center",
      marginTop:10,
      

      
    },
    iconHeaderFile: {
      position: 'relative',
      marginLeft:10,
      
      //flex:1,
      color:'white',
      fontWeight:'bold',
      marginTop:0,

      fontSize:35,
      

    },

    headerImageHeaderFile:{
      width:40,
      height:40,
      // marginHorizontal:10,
      marginTop:0,
      borderRadius:20,
      marginRight:10,
      marginBottom:0
    },

















// ----------------------------HOME COMPONENT 1-----------------



itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.1,
    borderColor: "#ddd",

  },
  itemImageStyle: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius:5,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    // color: "#777",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },


  
  















// ---------------------WATOTOT HOME SCREEN && 
// ALL CHOICES WHICH ARE IN LISHE SCREEN--------------------
homeComponentContainer:{
  height:height,
  width:width,
  flex:1,

},
ComponentHeaderText:{
	textAlign:'center',
	fontSize:18,
	marginBottom:20,
  marginTop:20,
  fontWeight:'bold',
   elevation:5,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'red',
    shadowOpacity:1,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6,
    paddingHorizontal:20,

},

  listContainer: {
    width: Dimensions.get('window').width / 2,
    //backgroundColor: 'black',
    margin: 1,
    borderRadius: 20,
    
    

  },
  imageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
  	width: '90%',
  	 height: undefined, 
  	 aspectRatio: 1,
  	 borderRadius:20,
  	},
  nameText: {
    color: 'white',
    // fontWeight: 'bold',
    marginLeft: 15,
    fontSize:18,
    // fontFamily: 'SerifRegular',
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    // fontFamily: 'SerifRegular',
  },
  button: {
    backgroundColor: '#B7CEEC',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 10,
    borderTopRightRadius:0,


  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight:'bold',
    // fontFamily: 'SerifRegular',
  },








// ALL LISHE APP STYLES STARTING HERE------------------





















// --------------------- LISHE SCREEN--------------------
CategoryhomeComponentContainer:{
  height:height-90,
  // backgroundColor:'red'

},
CategoryComponentHeaderText:{
  textAlign:'center',
  fontSize:18,
  marginBottom:20,
  marginTop:20,
  fontWeight:'bold',
   elevation:5,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'red',
    shadowOpacity:1,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6,
    paddingHorizontal:20,

},
LisheFlatListContainer:{
  // backgroundColor:'blue',
  height:height/2-60

},
LisheFlatListImageContainer:{
  justifyContent:'center',
  alignItems:'center',
  position:'static',

},
LisheFlatListImage:{
  width:width-130,
  height:height/2 - 150,
  marginTop:15,
  borderRadius:15,
},

  CategorylistContainer: {
    width: Dimensions.get('window').width / 2,
    flex:1,
     // width: Dimensions.get('window').width / 2-10, //km ni column 2 tu
    //backgroundColor: 'black',
    marginTop: 30,
    borderRadius: 20,

  },
  CategoryimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  Categoryimage: {
    width: '90%',
     height: undefined, 
     aspectRatio: 1,
     borderRadius:20,
    },
  CategorynameText: {
    color: 'white',
    // fontWeight: 'bold',
    marginLeft: 15,
    fontSize:18,
    // fontFamily: 'SerifRegular',
  },
  CategorypriceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    // fontFamily: 'SerifRegular',
  },
  Categorybutton: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    marginHorizontal: 6,
    marginVertical: 10,
    borderRadius: 20,
    borderColor:'yellow',
    borderWidth:3,
    
  },
  CategorybuttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight:'bold',
    // fontFamily: 'SerifRegular',
  },







// ----------------------DAYS-------------------------------

DayshomeComponentContainer:{
  height: Dimensions.get('window').height,
  flex:1,
  // paddingBottom:100,

},

DaysComponentHeaderText:{
  textAlign:'center',
  fontSize:18,
  marginBottom:20,
  marginTop:20,
  fontWeight:'bold',
   elevation:5,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'red',
    shadowOpacity:1,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6,
    paddingHorizontal:20,

},

DayHeaderText:{
  textAlign:'center',
  fontSize:16,
  marginBottom:10,
  marginTop:10,
  backgroundColor: '#B7CEEC',
    padding: 10,
    
    borderRadius: 10,
    borderTopRightRadius:0,
    width:width/2,

},
DayHeaderContainer:{
  justifyContent:'center',
    alignItems:'center'
  },

  DayslistContainer: {
    width: Dimensions.get('window').width / 2,
    flex:1,
     // width: Dimensions.get('window').width / 2-10, //km ni column 2 tu
    //backgroundColor: 'black',
    marginTop: 30,
    borderRadius: 20,

  },
  DaysimageContainer: {
    margin: 5,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    
  },
  Daysimage: {
    width: '70%',
    // height:100,
     height: undefined, 
     aspectRatio: 1,
     borderRadius:20,

    },
  DaysnameText: {
    color: 'white',
    // fontWeight: 'bold',
    marginLeft: 15,
    fontSize:18,
    // fontFamily: 'SerifRegular',
  },
  DayspriceText: {
    color: 'black',
    textAlign: 'center',
    
    // fontFamily: 'SerifRegular',
  },
  Daysbutton: {
    
    paddingVertical: 5,
    marginHorizontal: 6,
    marginVertical: 10,
        
  },
  DaysbuttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight:'bold',
    // fontFamily: 'SerifRegular',
  },


















//---------------------------------LISHE HOME SCREEN------------------

 
  
BottomView: {
  position:'static',
  height:height/2 - 50,





},

BottomImage: {
width:width,
height:height/2-100,
marginVertical:5,
marginBottom:50,


},


itemsContainer:{
  flex:1,
  padding: 10,
  borderColor:'yellow',
  borderWidth:6,
  borderRadius:20,
  paddingHorizontal:20,
  justifyContent:'center',
  alignItems:'center',
  margin:10,
  width:width/2-30,




},
itemHeader:{
  color:'black',
  fontWeight:'bold',
  paddingVertical:15,
  fontSize:14,

},











// ELIMU YA LISHE HOME SCREEN---------------------


// --------------------ELIMU YA LISHE HOMESCREEN------------



ElimuYaLisheComponentHeaderText:{
  textAlign:'center',
  fontSize:18,
  marginBottom:20,
  marginTop:20,
  fontWeight:'bold',
   elevation:5,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'red',
    shadowOpacity:1,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6,
    paddingHorizontal:20,

},

  ElimuYaLishelistContainer: {
    width: Dimensions.get('window').width,
    //backgroundColor: 'black',
    margin: 1,
    borderRadius: 20,
    marginTop:30,
  },
  ElimuYaLisheimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  ElimuYaLisheimage: {
    width: '90%',
     height: undefined, 
     aspectRatio: 1,
     borderRadius:20,
    },
  ElimuYaLishenameText: {
    color: 'white',
    // fontWeight: 'bold',
    marginLeft: 15,
    fontSize:18,
    // fontFamily: 'SerifRegular',
  },
  ElimuYaLishepriceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    // fontFamily: 'SerifRegular',
  },
  ElimuYaLishebutton: {
    backgroundColor: '#B7CEEC',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 10,
    borderTopRightRadius:0,

  },
  ElimuYaLishebuttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight:'bold',
    // fontFamily: 'SerifRegular',
  },













// ----------------MAKUNDI YA CHAKULA HOME SCREEN---------
MakundiYaChakulahomeComponentContainer:{
  height: Dimensions.get('window').height,
   flex:1,
  // paddingBottom:100,

},

MakundiYaChakulaComponentHeaderText:{
  textAlign:'center',
  fontSize:18,
  marginBottom:20,
  marginTop:20,
  fontWeight:'bold',
   elevation:5,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'red',
    shadowOpacity:1,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6,
    paddingHorizontal:20,

},

MakundiYaChakulaHeaderText:{
  textAlign:'center',
  fontSize:16,
  marginBottom:10,
  marginTop:20,
  backgroundColor: 'yellow',
    padding: 10,
    fontWeight:'bold',
    
    borderRadius: 10,
    borderTopRightRadius:0,
    width:width-40,
    

},
MakundiYaChakulaHeaderContainer:{
  justifyContent:'center',
    alignItems:'center',
    
  },

  MakundiYaChakulalistContainer: {
    width: Dimensions.get('window').width,
    // 
    flex:1,
     // width: Dimensions.get('window').width / 2-10, //km ni column 2 tu
    //backgroundColor: 'black',
    marginTop: 30,
    borderRadius: 20,

  },

 
  MakundiYaChakulapriceText: {
    color: 'black',
    backgroundColor:'wheat',
    padding:10,
    // textAlign: 'center',
    
    // fontFamily: 'SerifRegular',
  },
  MakundiYaChakulabutton: {
    
    // paddingVertical: 5,
    marginHorizontal: 20,
    marginVertical: 0,
        
  },
  MakundiYaChakulabuttonText: {
    color: 'black',
    // textAlign: 'center',
  
    fontWeight:'bold',
    // fontFamily: 'SerifRegular',
  },











// ----------------POSTER NA PICHA HOME SCREEN---------
PosterNaPichahomeComponentContainer:{
  height: Dimensions.get('window').height,
   flex:1,
  paddingBottom:20,

},

PosterNaPichaComponentHeaderText:{
  textAlign:'center',
  fontSize:18,
  marginBottom:20,
  marginTop:20,
  fontWeight:'bold',
   elevation:5,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'red',
    shadowOpacity:1,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6,
    paddingHorizontal:20,

},

PosterNaPichaHeaderText:{
  textAlign:'center',
  fontSize:16,
  marginBottom:20,
  marginTop:20,
  backgroundColor: 'yellow',
    padding: 10,
    fontWeight:'bold',
    
    borderRadius: 10,
    borderTopRightRadius:0,
    width:width-40,
    

},
PosterNaPichaHeaderContainer:{
  justifyContent:'center',
    alignItems:'center',
    
  },

  PosterNaPichalistContainer: {
    width: Dimensions.get('window').width,
    // 
    flex:1,
     // width: Dimensions.get('window').width / 2-10, //km ni column 2 tu
    //backgroundColor: 'black',
    marginTop: 2,
    borderRadius: 20,

  },
  PosterNaPichaimageContainer: {
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  PosterNaPichaimage: {
    width: width/2-20,
     height: undefined, 
     aspectRatio: 1,
     borderRadius:20,
    },
  PosterNaPichanameText: {
    color: 'white',
    // fontWeight: 'bold',
    marginLeft: 15,
    fontSize:18,
    // fontFamily: 'SerifRegular',
  },
 
  PosterNaPichapriceText: {
    color: 'black',
    backgroundColor:'wheat',
    padding:10,
    // textAlign: 'center',
    
    // fontFamily: 'SerifRegular',
  },
  PosterNaPichabutton: {
    
    // paddingVertical: 5,
    marginHorizontal: 20,
    marginVertical: 0,
        
  },
  PosterNaPichabuttonText: {
    color: 'black',
    // textAlign: 'center',
  
    fontWeight:'bold',
    // fontFamily: 'SerifRegular',
  },
















// ----------------------BIDHAA ZETU HOMESCREEN-------------------------------

BidhaaZetuhomeComponentContainer:{
  height: Dimensions.get('window').height,
   flex:1,
  // paddingBottom:100,

},

BidhaaZetuComponentHeaderText:{
  textAlign:'center',
  fontSize:18,
  marginBottom:20,
  marginTop:20,
  fontWeight:'bold',
   elevation:5,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'red',
    shadowOpacity:1,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6,
    paddingHorizontal:20,

},

BidhaaZetuHeaderText:{
  textAlign:'center',
  fontSize:16,
  marginBottom:10,
  marginTop:10,
  backgroundColor: 'yellow',
    padding: 10,
    
    borderRadius: 10,
    borderTopRightRadius:0,
    width:width-40,
    fontWeight:'bold',

},
BidhaaZetuHeaderContainer:{
  justifyContent:'center',
    alignItems:'center'
  },

  BidhaaZetulistContainer: {
    width: Dimensions.get('window').width / 2,
    flex:1,
     // width: Dimensions.get('window').width / 2-10, //km ni column 2 tu
    //backgroundColor: 'black',
    marginTop: 30,
    borderRadius: 20,

  },
  BidhaaZetuimageContainer: {
    margin: 5,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    
  },
  BidhaaZetuimage: {
    width: '70%',
    // height:100,
     height: undefined, 
     aspectRatio: 1,
     borderRadius:20,

    },
  BidhaaZetunameText: {
    color: 'white',
    // fontWeight: 'bold',
    marginLeft: 15,
    fontSize:18,
    // fontFamily: 'SerifRegular',
  },
  BidhaaZetupriceText: {
    color: 'black',
    textAlign: 'center',
    
    // fontFamily: 'SerifRegular',
  },
  BidhaaZetubutton: {
    
    paddingVertical: 5,
    marginHorizontal: 6,
    marginVertical: 10,
        
  },
  BidhaaZetubuttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight:'bold',
    // fontFamily: 'SerifRegular',
  },











// ---------------------------PROFILE SCREEN---------------

  Profilecontainer: {
    flex: 1,
    // backgroundColor: 'wheat',
    
    alignItems:'center',
    height:height,
    

  },
  ProfilecontainerOne:{
   
    alignItems:'center',
    height:height-200,

  },
  ProfilecontainerTwo:{
    marginBottom:50,
    
  },
  ProfileTitleContainer:{
     fontSize:16,
  marginBottom:0,
  marginTop:0,
  backgroundColor: 'yellow',
    padding: 10,
    fontWeight:'bold',
    
    borderRadius: 10,
    borderTopRightRadius:0,
    width:width-40,
    alignItems:'center',
    borderTopRightRadius:0,

  },
  ProfileTitle:{
    fontSize:16,
  fontWeight:'bold',

  },
  ProfileImageContainer:{
    marginTop:0,


  },
  ProfileImage:{
    width:150,
    height:150,
    borderRadius:80,

  },


ProfileDetails:{
  marginTop:20,
  alignItems:'center'

},
ProfileName:{
  marginBottom:10,
  fontWeight:'bold',
  fontSize:16,
},
ProfileBio:{
  fontSize:16,

},

ProfileContactContainer:{
  marginTop:60,

},
phone:{
  marginBottom:10,
  fontSize:16,

},

SignoutContainer:{

  fontSize:16,
  marginBottom:10,
  marginTop:20,
  backgroundColor: 'yellow',
    padding: 10,
    fontWeight:'bold',
    
    borderRadius: 10,
    borderTopRightRadius:0,
    width:width-100,
    alignItems:'center',

},
SignoutText:{
  fontSize:16,
  fontWeight:'bold',

},










//--------------------------ABOUT SCREEN-------------------
  Aboutcontainer: {
    flex: 1,
    // backgroundColor: 'wheat',
    
        height:height,
        width:width,
    

  },
  AboutcontainerOne:{
   
    
    height:height-150,

  },
  AboutcontainerTwo:{
    marginBottom:80,
    
  },


  AboutTitleContainer:{
     fontSize:16,
  marginBottom:0,
  marginTop:0,
  backgroundColor: 'yellow',
    padding: 10,
    fontWeight:'bold',

    
    borderRadius: 10,
    borderTopRightRadius:0,
    width:width-40,
    alignItems:'center',
    borderTopRightRadius:0,
    marginHorizontal:20,

  },
  AboutTitle:{
    fontSize:16,
  fontWeight:'bold',

  },


  DescriptionContainer:{
    marginTop:20,
    paddingHorizontal:20,

  },

  Description:{
    fontSize:16,
    lineHeight:20

  },

  AboutInformationContainer:{
    marginTop:70,
   
    alignItems:'flex-end',
    paddingHorizontal:20,


  },

AboutInformation:{
  color:'black',
  fontWeight:'bold',
  backgroundColor:'yellow',
  padding:15,
  paddingHorizontal:50,
  borderTopLeftRadius:50,


},

NumbersContainer:{
  marginTop:15,
  flexDirection:'row',
  marginBottom:15,

},
Number1:{
  fontSize:16,
  marginRight:20,

},
Number2:{
  fontSize:16,
  

},

LinksContainer:{
  marginTop:10,
  width:width,
  flex:1,
  marginHorizontal:20,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'


},
Link:{
  marginHorizontal:15,
},

AppNameContainer:{
  marginTop:15,
  justifyContent:'center',
  alignItems:'center'
},
AppName:{
  fontWeight:'bold',
  fontSize:16,
},

FeelFreeContainer:{
  marginTop:15,
  justifyContent:'center',
  alignItems:'center',
  

},

FeelFree:{
  backgroundColor:'yellow',
  padding:15,
  borderRadius:10,
  fontWeight:'bold'
},

















//------------------------WEEK STYLES--------------------

 Weekcontainer: {
    flex: 1,
    
    alignItems: 'center',
    // justifyContent: 'center',

    
  },
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
    marginBottom:20,

  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#fff',
    // height: 200,
    borderRadius: radius,


    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },

    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  JeWajuaContainer:{
    marginTop:15,
    marginBottom:10,


  },
  JeWajuaText:{
    fontSize:18,
    fontWeight:'bold',
  },
  imageStyle: {
    height: 130,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '800',
  },
  descriptionStyle:{
    fontSize:16,
    marginTop:10,

  },
  categoryStyle: {
    fontWeight: '200',
    color:'white',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom:10,
  },





























//------------------------WIKI YA 1---------------------




JeWajuaOpacity:{
  width: width,
  marginVertical: 14,
  flex:1,
 },

JeWajuaImageContainer:{
  width: width,
  // height: 100,
  borderRadius: 10,
  // backgroundColor: 'red',
  position: 'relative',
  // justifyContent: 'center',
  // alignItems: 'center',
  marginBottom: 40,

},

JeWajuaImage:{
    width: width-30,
  height: 160,
},
JeWajuaTitleContainer:{
  marginTop:15,
  marginHorizontal:20,
},
JeWajuaTitle:{
  fontSize: 16,
  // color: COLOURS.black,
  fontWeight: 'bold',
  marginBottom: 2,
},

JeWajuaDescription:{
  fontSize: 16,
  // color: COLOURS.black,
  
  marginBottom: 15,
},













MatatizoUnayowezaKupataContainer:{
  width: width,
  marginVertical: 14,
  flex:1,


},
MatatizoUnayowezaKupataImageContainer:{
  width: width,
  // height: 100,
  borderRadius: 10,
  // backgroundColor: 'red',
  position: 'relative',
  // justifyContent: 'center',
  // alignItems: 'center',
  marginBottom: 40,
  flex:1,

},
MatatizoUnayowezaKupataImage:{
  width: width-30,
  height: 160,
  


},
MatatizoUnayowezaKupataTitle:{
  fontSize: 16,
  // color: COLOURS.black,
  fontWeight: 'bold',
  marginBottom: 2,
},

MatatizoUnayowezaKupataDescription:{
  fontSize: 16,
  // color: COLOURS.black,
  
  marginBottom: 15,

},







TaarifaZaUjauzitoContainer:{
  width: width,
  marginVertical: 5,
  flex:1,
},
TaarifaZaUjauzitoContainerKubwa:{
   width: width,
            
  borderRadius: 10,
  // backgroundColor: 'red',
  position: 'relative',
  justifyContent: 'space-between',
  // alignItems: 'center',
  marginBottom: 10,
  flex:1,

 
},

TaarifaZaUjauzitoContainerNdogoYaRow:{
  flexDirection:'row',
  flex:1,
  alignItems:'center'
},
TaarifaZaUjauzitoContainerImage:{
  width: 100,
  height: 100,
  borderRadius:30,
  marginRight:20,
},
TaarifaZaUjauzitoContainerTitle:{
  fontWeight:'bold',
  fontSize:16,
  marginBottom:10,
},

TaarifaZaUjauzitoContainerDescription:{
  fontSize:16,
  marginBottom:10,
},




WajawazitoContainer:{
  width: width,
  marginVertical: 2,
  flex:1,
},

WajawazitoContainerKubwa:{
   width: width,
            
  borderRadius: 10,
  // backgroundColor: 'red',
  position: 'relative',
  justifyContent: 'space-between',
  // alignItems: 'center',
  marginBottom: 10,
  flex:1,
},
WajawazitoContainerNdogoYaRow:{
  flexDirection:'row',
  flex:1,
  alignItems:'center',
},
WajawazitoContainerImage:{
  width: 120,
  height: 120,
  borderRadius:20,
  marginRight:20,
},
WajawazitoContainerTimeTextContainer:{
  flex:1,
},
WajawazitoContainerTimeText:{
  fontWeight:'bold',
  fontSize:16,
  marginBottom:10,
},

WajawazitoContainerDescription:{
  fontSize:16,
  marginBottom:10,
},






MainContainer:{
  width: width,
  height: height,
  flex:1,
},
MainContainerNdogo:{
  padding: 16,
},
MainContainerNdaniYaNdogo:{
  flexDirection: 'column',
  alignItems: 'center',
},
MainContainerTitleContainer:{
  flexDirection: 'column',
  alignItems: 'center',
},
MainContainerTitleText:{
  fontSize: 16,
  // color: COLOURS.black,
  fontWeight: 'bold',
  letterSpacing: 1,
  textAlign:'center',
  marginBottom:10,
},
MainContainerListFilterContainer:{
  flexDirection: 'column',
// flexWrap: 'wrap',

alignItems:'center'
},




























  // ----------------------SETTINGS.JS---------------------

   headerSettingPage: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
    fontFamily:'SerifRegular',
  },
  titleSettingPage: {
    fontSize: 32,
    //fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    
  },
  subtitleSettingPage: {
    fontSize: 15,
    //fontWeight: '500',
    color: '#929292',
    
  },
  profile: {
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#3d3d3d',
    },
  profileHandle: {
    marginTop: 4,
    fontSize: 15,
    color: '#989898',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  tabs: {
    padding: 16,
    flexDirection: 'row',
    
  },
  tab: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    // overflow: 'hidden',

  },
  tabWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderColor: '#e5e7eb',
    borderBottomWidth: 2,

  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    marginLeft: 5,
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    paddingLeft: 24,
    paddingRight: 24,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#2c2c2c',
 
  },
  rowValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#7f7f7f',
    marginRight: 4,
 
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  containerSettingPage: {
    paddingVertical: 24,
  },
  contentSettingPage: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
 
  },









  });
