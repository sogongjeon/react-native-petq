import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const NotificationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw`flex justify-center`}>
      <Text>알림</Text>
    </SafeAreaView>
  );
};

export default NotificationScreen;
