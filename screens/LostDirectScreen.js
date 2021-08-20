import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const LostDirectScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw`flex justify-center`}>
      <Text>애완동물을 잃어버렸어요 😂</Text>
    </SafeAreaView>
  );
};

export default LostDirectScreen;
