import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const CommunityScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw`flex-auto justify-center items-center bg-white`}>
      <Text>커뮤니티</Text>
    </SafeAreaView>
  );
};

export default CommunityScreen;
