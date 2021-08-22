import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ListScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw`flex-auto justify-center items-center bg-white`}>
      <Text>열람</Text>
    </SafeAreaView>
  );
};

export default ListScreen;
