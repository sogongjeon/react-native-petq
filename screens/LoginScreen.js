import React, {useState, useContext} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {AuthContext} from '../components/AuthContext';

const LoginScreen = ({navigation}) => {
  console.log('로그인 화면');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext);
  return (
    <View>
      <ImageBackground
        style={tw`w-full h-full`}
        source={{
          uri: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDZfMSAg/MDAxNTgwOTYxNTQ1NDAx.GZkh36wScdDere6JaAyRWugwlNZ11UL0RoiykfMTTfsg.3q8Pa9FfwI4myGXjVPRkDc1VI7lHic3jAmg_mMxdI1Eg.PNG.africaamc/cm08045034.png?type=w800',
        }}>
        <SafeAreaView style={tw`flex-auto justify-center items-center`}>
          <Text style={tw`text-black text-4xl mb-80 font-black`}>PetQ</Text>
          <View
            style={tw`w-10/12 h-14 m-2 justify-center p-4 bg-black rounded-3xl`}>
            <TextInput
              placeholderTextColor="white"
              placeholder="사용자 이름"
              value={username}
              onChangeText={setUsername}
              style={tw`text-white`}
            />
          </View>
          <View
            style={tw`w-10/12 h-14 m-2 justify-center p-4 bg-black rounded-3xl`}>
            <TextInput
              placeholder="비밀번호"
              placeholderTextColor="white"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={tw`text-white`}
            />
          </View>
          <TouchableOpacity>
            <Text style={tw`text-black text-sm`}>
              비밀번호를 잊어버리셨나요?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => signIn({username, password})}
            style={tw`w-10/12 h-14 m-2 mt-10 justify-center items-center p-4 bg-red-500 rounded-3xl`}>
            <Text style={tw`text-white`}>로그인</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
