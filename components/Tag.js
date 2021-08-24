import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const Tag = props => {
  const icon = props.icon;
  const text = props.text;
  return (
    <View
      style={tw`flex-row items-center mt-1 ml-1 p-1 pl-2 pr-2 rounded-full bg-white border border-gray-500 shadow-md`}>
      {icon}
      <Text style={tw`text-xs font-normal`}>{text}</Text>
    </View>
  );
};

export default Tag;
