import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import NavOptions from '../components/NavOptions';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const renderHeader = () => {
  return (
    <View style={tw`flex flex-row items-center justify-between p-4`}>
      <View style={tw`w-8`} />
      <View style={tw`flex-row`}>
        <Text style={tw`font-extralight text-3xl`}>Pet</Text>
        <Text style={tw`font-bold text-3xl`}>Q</Text>
      </View>
      <TouchableOpacity>
        <Icon
          style={tw`rounded-full`}
          name="edit"
          color="black"
          type="feather"
        />
      </TouchableOpacity>
    </View>
  );
};
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw`flex bg-white h-full`}>
      {renderHeader()}
      <ScrollView style={tw`w-full flex flex-column`}>
        <NavOptions />
        <Text style={tw`font-semibold text-xl`}>지금 인기있는 글</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
