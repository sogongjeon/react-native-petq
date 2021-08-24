import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import DirectButton from '../components/DirectButton';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {FlatGrid} from 'react-native-super-grid';

const HomeScreen = ({navigation}) => {
  console.log('홈 화면');
  const [count, setCount] = useState(0);
  const [items, setItems] = React.useState([
    {name: 'TURQUOISE', code: '#1abc9c'},
    {name: 'EMERALD', code: '#2ecc71'},
    {name: 'PETER RIVER', code: '#3498db'},
    {name: 'AMETHYST', code: '#9b59b6'},
    {name: 'WET ASPHALT', code: '#34495e'},
    {name: 'GREEN SEA', code: '#16a085'},
    {name: 'NEPHRITIS', code: '#27ae60'},
    {name: 'BELIZE HOLE', code: '#2980b9'},
    {name: 'WISTERIA', code: '#8e44ad'},
    {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
    {name: 'SUN FLOWER', code: '#f1c40f'},
    {name: 'CARROT', code: '#e67e22'},
    {name: 'ALIZARIN', code: '#e74c3c'},
    {name: 'CLOUDS', code: '#ecf0f1'},
    {name: 'CONCRETE', code: '#95a5a6'},
    {name: 'ORANGE', code: '#f39c12'},
    {name: 'PUMPKIN', code: '#d35400'},
    {name: 'POMEGRANATE', code: '#c0392b'},
    {name: 'SILVER', code: '#bdc3c7'},
    {name: 'ASBESTOS', code: '#7f8c8d'},
  ]);

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
      </ScrollView>
      <FlatGrid
        itemDimension={130}
        data={items}
        style={{}}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({item}) => (
          <View
            style={{
              justifyContent: 'flex-end',
              borderRadius: 5,
              padding: 10,
              height: 150,
              backgroundColor: item.code,
            }}>
            <Text style={{fontSize: 16, color: '#fff', fontWeight: '600'}}>
              {item.name}
            </Text>
            <Text style={{fontWeight: '600', fontSize: 12, color: '#fff'}}>
              {item.code}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
