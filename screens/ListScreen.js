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
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Flag from '../components/Flag';
import Tag from '../components/Tag';
import {RefreshControl} from 'react-native';

const ListScreen = () => {
  console.log('열람 화면');
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

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

  useEffect(() => {
    console.log('useEffect');
    getData();
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

  const renderItem = useCallback(({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ItemDetail', item)}
        style={tw`flex-row bg-white ml-6 mr-6 mt-4 rounded-lg shadow-xl`}>
        {/* 이미지 */}
        <View style={tw`rounded-full m-4 h-24 w-24`}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/3140163?v=4',
            }}
            style={tw`w-full h-full rounded-full`}
            resizeMode="cover"
          />
        </View>
        {/* 태그 */}
        <View style={tw`flex-auto`}>
          <Text style={tw`font-semibold text-lg mt-4`}>
            {item.kindName.split(']')[1]}
          </Text>
          <View style={tw`flex-row flex-wrap mb-4 pr-3`}>
            <Tag
              text={
                item.type === 'DOG'
                  ? '개'
                  : item.type === 'CAT'
                  ? '고양이'
                  : '기타'
              }
            />
            <Tag text={item.place} />
            <Tag text={item.date} />
            <Tag
              text={
                item.sex === '남' ? '수컷' : item.sex === '여' ? '임컷' : '미상'
              }
            />
          </View>
        </View>
        {/* 남은 공고 기간 */}
        <Flag text={item.dday} />
      </TouchableOpacity>
    );
  }, []);
  const keyExtractor = useCallback(item => item.id, []);
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
        ListEmptyComponent={<Text>데이터가 없는뎁쇼?</Text>}
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
