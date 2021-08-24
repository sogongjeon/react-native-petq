import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Flag from '../components/Flag';
import Tag from '../components/Tag';
import {RefreshControl} from 'react-native';
import {Icon} from 'react-native-elements';

const ListScreen = () => {
  const navigation = useNavigation();
  const keyExtractor = useCallback(item => item.id, []);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  console.log('열람 화면');

  useEffect(() => {
    console.log('useEffect');
    getData();
  }, []);

  const getData = () => {
    const uri = `http://59.187.226.217:8081/v1/animal/list?protectType=SHELTER&page=${page}`;
    console.log(uri);
    fetch(uri)
      .then(response => response.json())
      .then(json => {
        setData([...data, ...json.data.elements]);
        setPage(page + 1);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderItem = useCallback(({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ItemDetail', item)}
        style={tw`flex flex-row bg-white pl-6 pr-2 pt-4 pb-4 ml-6 mr-6 mt-4 rounded-2xl shadow-xl`}>
        {/* 이미지 */}
        <View style={tw`h-24 w-24 mr-4 shadow-xl`}>
          <Image
            source={{
              uri: item.image.replace(/codejune.iptime.org/g, '59.187.226.217'),
            }}
            style={tw`w-full h-full rounded-full`}
            resizeMode="cover"
          />
        </View>
        {/* 태그 */}
        <View style={tw`flex-auto`}>
          <Text style={tw`font-bold text-lg`}>
            {item.kindName.split(']')[1]}
          </Text>
          <View style={tw`flex-row flex-wrap pr-3`}>
            <Tag
              text={
                item.type === 'DOG'
                  ? '개'
                  : item.type === 'CAT'
                  ? '고양이'
                  : '기타'
              }
              icon={
                item.type === 'DOG' ? (
                  <Icon
                    style={tw`pr-1`}
                    size={14}
                    name="dog"
                    color="gray"
                    type="font-awesome-5"
                  />
                ) : item.type === 'CAT' ? (
                  <Icon
                    style={tw`pr-1`}
                    size={14}
                    name="cat"
                    color="gray"
                    type="font-awesome-5"
                  />
                ) : (
                  <Icon
                    style={tw`pr-1`}
                    size={14}
                    name="question"
                    color="gray"
                    type="font-awesome-5"
                  />
                )
              }
            />
            <Tag
              text={item.date}
              icon={
                <Icon
                  style={tw`pr-1`}
                  size={14}
                  name="calendar"
                  color="gray"
                  type="feather"
                />
              }
            />
            <Tag
              text={item.place}
              icon={
                <Icon
                  style={tw`pr-1`}
                  size={14}
                  name="map-pin"
                  color="gray"
                  type="feather"
                />
              }
            />
            <Tag
              text={
                item.sex === '남' ? '수컷' : item.sex === '여' ? '암컷' : '미상'
              }
              icon={
                item.sex === '남' ? (
                  <Icon
                    style={tw`pr-1`}
                    size={14}
                    name="mars"
                    color="#0a4b78"
                    type="font-awesome-5"
                  />
                ) : item.sex === '여' ? (
                  <Icon
                    style={tw`pr-1`}
                    size={14}
                    name="venus"
                    color="#ff5964"
                    type="font-awesome-5"
                  />
                ) : (
                  <Icon
                    style={tw`pr-1`}
                    size={14}
                    name="question"
                    color="gray"
                    type="font-awesome-5"
                  />
                )
              }
            />
          </View>
        </View>
        {/* 남은 공고 기간 */}
        <Flag text={item.dday} />
      </TouchableOpacity>
    );
  }, []);

  const onEndReached = () => {
    console.log('마지막 페이지 도달');
    getData();
  };

  const onRefresh = () => {
    console.log('새로고침 호출');
    setRefreshing(true);
    setData([]);
    setPage(0);
    getData();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <FlatList
        data={data}
        extraData={page}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        disableVirtualization={false}
        bounces={true}
        horizontal={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.6}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        windowSize={10}
        removeClippedSubviews={true}
        // ListHeaderComponent={<Text>나는 헤더다</Text>}
        // ListFooterComponent={loading && <ActivityIndicator size={'large'} />}
        // ListEmptyComponent={<ActivityIndicator size={'small'} />}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
