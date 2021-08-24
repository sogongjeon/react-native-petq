import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Flag = props => {
  return (
    <View style={tw`absolute w-9 bg-gray-500 ml-2 shadow-xl`}>
      <View style={[styles.flagTop, tw`w-9 shadow-xl`]} />
      <View style={[styles.flagBottom, tw`shadow-xl`]} />
      <Text
        style={tw`absolute text-white font-bold pt-1 w-full text-xs text-center`}>
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flag: {},
  flagTop: {
    width: 46,
    height: 24,
    backgroundColor: '#B91C1C',
  },
  flagBottom: {
    position: 'absolute',
    left: 0,
    bottom: -12,
    width: 0,
    height: 0,
    borderBottomWidth: 13,
    borderBottomColor: 'transparent',
    borderLeftWidth: 18,
    borderLeftColor: '#B91C1C',
    borderRightWidth: 18,
    borderRightColor: '#B91C1C',
  },
});

export default Flag;
