import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, SafeAreaView, View, Button} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ListScreen = () => {
  console.log('열람 화면');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-auto justify-center items-center bg-white`}>
      <Button
        title="세부 페이지 이동"
        titleStyle={{}}
        onPress={() => navigation.navigate('ItemDetail')}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
