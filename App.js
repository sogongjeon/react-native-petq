import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LostDirectScreen from './screens/LostDirectScreen';
import AdoptDirectScreen from './screens/AdoptDirectScreen';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import ListScreen from './screens/ListScreen';
import CommunityScreen from './screens/CommunityScreen';
import NotificationScreen from './screens/NotificationScreen';
import SettingScreen from './screens/SettingScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import tw from 'tailwind-react-native-classnames';

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ListStack = createNativeStackNavigator();

// 홈 화면
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerTintColor: 'black',
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'PetQ',
          headerLargeTitle: true,
        }}
      />
      <HomeStack.Screen
        name="LostDirectScreen"
        component={LostDirectScreen}
        options={{
          title: '',
          // headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="AdoptDirectScreen"
        component={AdoptDirectScreen}
        options={{
          title: '',
          // headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

// 열람 화면
function ListStackScreen() {
  return (
    <ListStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerTitle: '',
        headerShown: false,
      }}>
      <ListStack.Screen
        name="ItemDetail"
        component={ListTopTabScreen}
        options={{}}
      />
      <ListStack.Screen
        name="ItemDetail1"
        component={ItemDetailScreen}
        options={{}}
      />
    </ListStack.Navigator>
  );
}

function ListTopTabScreen() {
  return (
    <>
      <SafeAreaView style={tw`bg-white`} />
      <TopTab.Navigator
        initialRouteName="List1"
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
        <TopTab.Screen
          name="List1"
          component={ListScreen}
          options={{title: '보호소'}}
        />
        <TopTab.Screen
          name="List2"
          component={ItemDetailScreen}
          options={{title: '실종'}}
        />
        <TopTab.Screen
          name="List3"
          component={LostDirectScreen}
          options={{title: '목격/보호'}}
        />
      </TopTab.Navigator>
    </>
  );
}

// 전체 화면
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home';
                } else if (route.name === 'List') {
                  iconName = focused ? 'book-open' : 'book-open';
                } else if (route.name === 'Community') {
                  iconName = focused ? 'hash' : 'hash';
                } else if (route.name === 'Notification') {
                  iconName = focused ? 'star' : 'star';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'menu' : 'menu';
                }

                // You can return any component that you like here!
                return (
                  <Icon
                    name={iconName}
                    size={size}
                    color={color}
                    type="feather"
                  />
                );
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: 'gray',
              tabBarShowLabel: false,
              headerShown: false,
              tabBarStyle: {
                borderTopColor: 'transparent',
                position: 'absolute',
                overflow: 'hidden',
                padding: 5,
              },
            })}>
            <BottomTab.Screen name="Home" component={HomeStackScreen} />
            <BottomTab.Screen name="List" component={ListStackScreen} />
            <BottomTab.Screen name="Community" component={CommunityScreen} />
            <BottomTab.Screen
              name="Notification"
              component={NotificationScreen}
            />
            <BottomTab.Screen name="Settings" component={SettingScreen} />
          </BottomTab.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
