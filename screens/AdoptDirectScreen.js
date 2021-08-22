import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const AdoptDirectScreen = ({navigation}) => {
  console.log('입양 희망 바로가기 화면');
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            style={tw`pr-4`}
            name="chevron-left"
            color="black"
            type="feather"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={tw`flex-auto justify-center items-center bg-white`}>
      <Text>유기동물을 입양하고 싶어요 😍</Text>
    </SafeAreaView>
  );
};

export default AdoptDirectScreen;
