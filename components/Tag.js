import React from 'react';
import {Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Tag = props => {
  return (
    <View
      style={tw`items-center mt-1 ml-1 rounded-full bg-white border border-gray-500 shadow-md`}>
      <Text style={tw`text-xs font-normal p-1 pl-2 pr-2`}>{props.text}</Text>
    </View>
  );
};

export default Tag;
