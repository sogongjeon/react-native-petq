import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native';
import {Text, View, Image} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';
const data = [
  {
    id: '123',
    title: '애완동물을\n잃어버렸어요',
    image: 'https://links.papareact.com/3pn',
    screen: 'LostDirect',
  },
  {
    id: '456',
    title: '유기동물을\n입양하고 싶어요',
    image: 'https://links.papareact.com/28w',
    screen: 'AdoptDirect',
  },
];
const DirectButton = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-5 bg-gray-200 m-2 w-44 h-40 rounded-lg shadow`}>
          <View>
            {/* <Image
              style={{width: 120, height: 120, resizeMode: 'contain',}}
              source={{uri: item.image}}
            /> */}
            <Text style={tw`mt-2 text-base font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default DirectButton;
