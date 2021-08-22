import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const AdoptDirectScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw`flex-auto justify-center items-center bg-white`}>
      <Text>유기동물을 입양하고 싶어요 😍</Text>
    </SafeAreaView>
  );
};

export default AdoptDirectScreen;
