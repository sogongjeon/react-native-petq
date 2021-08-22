import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw`flex-auto justify-center items-center bg-white`}>
      <Text>설정</Text>
    </SafeAreaView>
  );
};

export default SettingScreen;
