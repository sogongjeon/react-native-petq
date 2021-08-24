import React from 'react';
import {View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Divider = props => {
  return <View style={[tw`border-b border-gray-300 mt-4 mb-4`, props.style]} />;
};

export default Divider;
