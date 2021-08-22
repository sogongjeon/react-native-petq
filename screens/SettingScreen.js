import React, {useContext} from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {AuthContext} from '../components/AuthContext';

const SettingScreen = ({navigation}) => {
  console.log('설정 화면');
  const {signOut} = useContext(AuthContext);

  return (
    <SafeAreaView style={tw`flex-auto justify-center items-center bg-white`}>
      <Button title="로그아웃" titleStyle={{}} onPress={signOut} />
    </SafeAreaView>
  );
};

export default SettingScreen;
