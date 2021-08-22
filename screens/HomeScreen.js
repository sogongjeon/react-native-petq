import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DirectButton from '../components/DirectButton';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const HomeScreen = ({navigation}) => {
  console.log('홈 화면');
  const [count, setCount] = useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            setCount(c => c + 1);
            alert(count.toString());
          }}>
          <Icon style={tw`pr-4`} name="edit" color="black" type="feather" />
        </TouchableOpacity>
      ),
    });
  }, [count, navigation, setCount]);

  return (
    <SafeAreaView style={tw`flex-auto bg-white`}>
      <ScrollView>
        <Text style={tw`font-semibold text-xl m-4`}>바로 시작하기</Text>
        <DirectButton />
        <Text style={tw`font-semibold text-xl m-4`}>지금 인기있는 글</Text>
        <DirectButton />
        <DirectButton />
        <DirectButton />
        <DirectButton />
        <DirectButton />
        <DirectButton />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
