import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ListScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw`flex justify-center`}>
      <Text>열람</Text>
    </SafeAreaView>
  );
};

export default ListScreen;
