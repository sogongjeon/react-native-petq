import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const NotificationScreen = ({navigation}) => {
  console.log('알림 화면');
  return (
    <SafeAreaView style={tw`flex-auto justify-center items-center bg-white`}>
      <Text>알림</Text>
    </SafeAreaView>
  );
};

export default NotificationScreen;
