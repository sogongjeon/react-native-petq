import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, SafeAreaView, View, Button, FlatList} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ListScreen = () => {
  console.log('열람 화면');
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('http://59.187.226.217:8081/v1/animal/kind');
      const json = await response.json();
      setData(json.data.elements);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={tw`flex-auto justify-center items-center bg-white`}>
      <FlatList
        data={data}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <Text>
            {item.kind}, {item.kindDetailName}
          </Text>
        )}
      />
      <Button
        title="세부 페이지 이동"
        titleStyle={{}}
        onPress={() => navigation.navigate('ItemDetail')}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
