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

const HomeScreen = ({navigation}) => {
  const [count, setCount] = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            setCount(c => c + 1);
            alert(count.toString());
          }}>
          <Icon
            style={tw`rounded-full`}
            name="edit"
            color="black"
            type="feather"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, setCount]);

  return (
    <SafeAreaView style={tw`flex-auto bg-white`}>
      <ScrollView>
        <Text style={tw`font-semibold text-xl m-4`}>지금 나의 상황은</Text>
        <NavOptions />
        <Text style={tw`font-semibold text-xl m-4`}>지금 인기있는 글</Text>
        <NavOptions />
        <NavOptions />
        <NavOptions />
        <NavOptions />
        <NavOptions />
        <NavOptions />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
