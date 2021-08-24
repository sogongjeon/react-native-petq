import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import Tag from '../components/Tag';

const ItemDetailScreen = ({navigation, route}) => {
  const [data, setData] = useState({});
  useEffect(() => {
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
    getData();
  }, [navigation]);

  const getData = () => {
    const uri = `http://59.187.226.217:8081/v1/animal/${route.params.id}`;
    console.log(uri);
    fetch(uri)
      .then(response => response.json())
      .then(json => {
        setData(json.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={tw`flex-auto justify-center items-center bg-white`}>
      <Animated.ScrollView style={tw`w-full pl-4 pr-4 `}>
        {/* 이미지 */}
        <View style={tw`w-full h-80 items-center`}>
          <Image
            source={{
              uri: route.params.image.replace(
                /codejune.iptime.org/g,
                '59.187.226.217',
              ),
            }}
            style={tw`w-full h-full rounded-3xl`}
            resizeMode="cover"
          />
        </View>
        {/* 제목 */}
        <Text style={tw`text-xs mt-6 ml-2 text-gray-700 font-semibold`}>
          유기번호: {data.desertionNo}
        </Text>
        <Text style={tw`font-black text-3xl`}>
          {route.params.kindName.split(']')[1]}
        </Text>
        <View style={tw`flex-row flex-wrap`}>
          <Tag
            text={
              route.params.type === 'DOG'
                ? '개'
                : route.params.type === 'CAT'
                ? '고양이'
                : '기타'
            }
            icon={
              route.params.type === 'DOG' ? (
                <Icon
                  style={tw`pr-1`}
                  size={14}
                  name="dog"
                  color="gray"
                  type="font-awesome-5"
                />
              ) : route.params.type === 'CAT' ? (
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
          {/* 태그: 관할지역 */}
          <Tag
            text={route.params.place}
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
          {/* 태그: 접수일자 */}
          <Tag
            text={route.params.date}
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
          {/* 태그: 성별 */}
          <Tag
            text={
              route.params.sex === '남'
                ? '수컷'
                : route.params.sex === '여'
                ? '암컷'
                : '미상'
            }
            icon={
              route.params.sex === '남' ? (
                <Icon
                  style={tw`pr-1`}
                  size={14}
                  name="mars"
                  color="#0a4b78"
                  type="font-awesome-5"
                />
              ) : route.params.sex === '여' ? (
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

        <View style={tw`border-b border-gray-300 mt-4 mb-4`} />
        {/* 공고사항 */}
        <Text>공고번호: {data.noticeNo}</Text>
        <Text>공고시작: {data.noticeStart}</Text>
        <Text>공고종료: {data.noticeEnd}</Text>
        <Text>접수날짜: {data.happenedDate}</Text>
        <Text>발견장소: {data.happenedPlace}</Text>

        {/* 세부사항 */}
        <Text>색상: {data.color}</Text>
        <Text>나이: {data.birthYear}</Text>
        <Text>체중: {data.weight}</Text>
        <Text>상태: {data.processState}</Text>
        <Text>특징: {data.specialMark}</Text>

        {/* 보호소 */}
        <Text>보호소 이름: {data.careName}</Text>
        <Text>보호소 전화번호: {data.careTel}</Text>
        <Text>보호소 주소: {data.careAddress}</Text>

        {/* 담당자 */}
        <Text>담당자: {data.managerName}</Text>
        <Text>담당자 전화번호{data.managerTel}</Text>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default ItemDetailScreen;
