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
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 50,
              color: 'black',
              marginBottom: 200,
            }}>
            PetQ
          </Text>
          <View
            style={{
              width: '80%',
              backgroundColor: '#465881',
              borderRadius: 25,
              height: 60,
              marginBottom: 20,
              justifyContent: 'center',
              padding: 20,
            }}>
            <TextInput
              placeholderTextColor="white"
              placeholder="사용자 이름"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View
            style={{
              width: '80%',
              backgroundColor: '#465881',
              borderRadius: 25,
              height: 60,
              marginBottom: 20,
              justifyContent: 'center',
              padding: 20,
            }}>
            <TextInput
              placeholder="비밀번호"
              placeholderTextColor="white"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <TouchableOpacity>
            <Text style={{color: 'black', fontSize: 11}}>
              비밀번호를 잊어버리셨나요?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => signIn({username, password})}
            style={{
              width: '80%',
              backgroundColor: '#fb5b5a',
              borderRadius: 25,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
            }}>
            <Text style={{color: 'white'}}>로그인</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
