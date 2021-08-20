import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw`flex justify-center`}>
      <Text>설정</Text>
    </SafeAreaView>
  );
};

export default SettingScreen;