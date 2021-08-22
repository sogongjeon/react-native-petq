import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const LoginScren = ({navigation}) => {
  return (
    <SafeAreaView style={tw`flex-auto justify-center items-center bg-white`}>
      <Text style={tw``}>로그인</Text>
    </SafeAreaView>
  );
};

export default LoginScren;
