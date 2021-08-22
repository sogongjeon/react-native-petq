import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const SplashScreen = ({navigation}) => {
  console.log('스플래시 화면');
  return (
    <SafeAreaView style={tw`flex-auto justify-center items-center bg-white`}>
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
