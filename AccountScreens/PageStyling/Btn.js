
import React from 'react';
import {View,TextInput, Text,Dimensions, Touchable, TouchableOpacity} from 'react-native';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  const {width,height} = Dimensions.get('window');
  return (
    <View
    // onPress={Press}
      style={{
        backgroundColor: "yellow",
        borderRadius: 100,
        alignItems: 'center',
        width: width-200,
        paddingVertical: 10,
        marginTop: 20,
        marginBottom:20,
      }}>
      <Text style={{color: "black", fontSize: 18, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </View>
  );
}
