import { Entypo, Feather } from '@expo/vector-icons';
// import faker from 'faker';
import React, {useState, useEffect, useContext} from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');



const _colors = {
  active: `#FCD259ff`,
  inactive: `#FCD25900`,
};
const _spacing = 10;

export default function KisukariWeeksRenderedScreen() {

  const navigation = useNavigation();
const [WeekName, setWeekName] = useState('');
    const move = (WeekName) =>{
      setWeekName(WeekName);
      console.log(WeekName)
      navigation.navigate('Kisukari ' +WeekName);
    }

//    const [data, setdata] = useState([
 
 
// {
//     job:'MOJA',
//     key:'Description 1',
//     id:'1'
//     },

// {
//     job:'PROTINI',
//     key:'Description 2',
//     id:'2'
//     },
//     ]);

 //FOR  APIS
const { datas:data, isPending, error } = useFetch('https://lisheapisapp.pythonanywhere.com/Lishe/Weeks/');



  return (
    <View style={{ flex: 1, alignItems: 'center',
    marginTop:20,
    marginBottom:20,
  }}>
      <FlatList
        style={{ flexGrow: 0 }}
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingLeft: 0 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index: fIndex }) => {
          return (
            <TouchableOpacity onPress={() => move(item.WeekName)}>
              <View
                style={{
                  marginRight: _spacing,
                  padding: _spacing,
                  borderWidth: 2,
                  borderColor: _colors.active,
                  borderRadius: 12,
                  backgroundColor: _colors.inactive,
                }}>
                <Text style={{ color: '#36303F', fontWeight: '700' }}>
                  {item.WeekName}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />


    </View>
  );
}