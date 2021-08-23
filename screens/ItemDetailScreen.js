import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const ItemDetailScreen = ({navigation, route}) => {
  console.log('열람 세부정보 화면');
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
      <Text>{route.params.id}</Text>
      <Text>{route.params.type}</Text>
      <Text>{route.params.image}</Text>
      <Text>{route.params.kindName}</Text>
      <Text>{route.params.place}</Text>
      <Text>{route.params.date}</Text>
      <Text>{route.params.sex}</Text>
      <Text>{route.params.dday}</Text>
      <Text>{route.params.favorite}</Text>
    </SafeAreaView>
  );
};

export default ItemDetailScreen;
