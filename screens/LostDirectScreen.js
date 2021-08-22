import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const LostDirectScreen = ({navigation}) => {
  console.log('실종 신고 바로가기 화면');
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
      <Text>애완동물을 잃어버렸어요 😂</Text>
    </SafeAreaView>
  );
};

export default LostDirectScreen;
