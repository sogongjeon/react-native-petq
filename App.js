import React, {useEffect, useReducer, useMemo} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import CommunityScreen from './screens/CommunityScreen';
import NotificationScreen from './screens/NotificationScreen';
import SettingScreen from './screens/SettingScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import LostDirectScreen from './screens/LostDirectScreen';
import AdoptDirectScreen from './screens/AdoptDirectScreen';
import {AuthContext} from './components/AuthContext';

// 메인 화면
const MainBottomTab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();
function MainStackScreen() {
  return (
    <MainBottomTab.Navigator
      screenOptions={({route}) => ({
        // 헤더 스타일
        headerLargeTitle: true,
        headerStyle: {shadowOpacity: 0},
        headerBackTitleVisible: false,
        headerTintColor: 'black',

        // 탭바 스타일
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: 'transparent',
          position: 'absolute',
          overflow: 'hidden',
          padding: 5,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === '홈') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === '열람') {
            iconName = focused ? 'book-open' : 'book-open';
          } else if (route.name === '커뮤니티') {
            iconName = focused ? 'hash' : 'hash';
          } else if (route.name === '알림') {
            iconName = focused ? 'star' : 'star';
          } else if (route.name === '설정') {
            iconName = focused ? 'menu' : 'menu';
          }
          return (
            <Icon name={iconName} size={size} color={color} type="feather" />
          );
        },
      })}>
      <MainBottomTab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
          },
          title: 'PetQ',
        }}
      />
      <MainBottomTab.Screen
        name="열람"
        component={ListStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainBottomTab.Screen name="커뮤니티" component={CommunityScreen} />
      <MainBottomTab.Screen name="알림" component={NotificationScreen} />
      <MainBottomTab.Screen name="설정" component={SettingScreen} />
    </MainBottomTab.Navigator>
  );
}

// 열람 화면
const ListTopTab = createMaterialTopTabNavigator();
const ListStack = createNativeStackNavigator();
function ListStackScreen() {
  return (
    <ListStack.Navigator
      screenOptions={{
        // 헤더 스타일
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerTitle: '',
        headerTintColor: 'black',
      }}>
      <ListStack.Screen
        name="List"
        component={ListTopTabScreen}
        options={{headerShown: false}}
      />
    </ListStack.Navigator>
  );
}

function ListTopTabScreen() {
  return (
    <>
      <SafeAreaView style={tw`bg-white`} />
      <ListTopTab.Navigator
        screenOptions={{
          // tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: {fontSize: 13, fontWeight: '800'},
          tabBarScrollEnabled: false,
          tabBarIndicatorStyle: {
            borderWidth: 1,
          },
          tabBarStyle: {
            height: 45,
          },
          swipeEnabled: false,
        }}>
        <ListTopTab.Screen
          name="Shelter"
          component={ListScreen}
          options={{title: '보호소'}}
        />
        <ListTopTab.Screen
          name="Lost"
          component={LostDirectScreen}
          options={{title: '실종'}}
        />
        <ListTopTab.Screen
          name="Protect"
          component={LostDirectScreen}
          options={{title: '목격/보호'}}
        />
      </ListTopTab.Navigator>
    </>
  );
}

// 전체 화면
export default function App({navigation}) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      // isLoading - 토큰 저장 확인
      // isSignout - 로그아웃 확인
      // userToken - 사용자 토큰, null이 아닌 경우 사용자가 로그인됨
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  useEffect(() => {
    // 여기서 토큰 동기화 Redux 사용해보면 된다고함
    const bootstrapAsync = async () => {
      let userToken;
      try {
      } catch (e) {}
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerBackTitleVisible: false,
            headerShadowVisible: false,
            headerTintColor: 'black',
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'bold',
            },
            headerShown: true,
          }}>
          {state.isLoading ? (
            <MainStack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                animation: 'flip',
                headerShown: false,
                // animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            <>
              <MainStack.Screen
                name="Home"
                component={MainStackScreen}
                options={{
                  headerLargeTitle: true,
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="LostDirect"
                component={LostDirectScreen}
                options={{
                  headerTitle: '',
                }}
              />
              <MainStack.Screen
                name="AdoptDirect"
                component={AdoptDirectScreen}
                options={{
                  headerTitle: '',
                }}
              />
              <MainStack.Screen
                name="ItemDetail"
                component={ItemDetailScreen}
                options={{
                  headerTitle: '',
                }}
              />
            </>
          )}
        </MainStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
