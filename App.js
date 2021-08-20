import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LostDirectScreen from './screens/LostDirectScreen';
import AdoptDirectScreen from './screens/AdoptDirectScreen';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import ListScreen from './screens/ListScreen';
import CommunityScreen from './screens/CommunityScreen';
import NotificationScreen from './screens/NotificationScreen';
import SettingScreen from './screens/SettingScreen';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="LostDirectScreen"
        component={LostDirectScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="AdoptDirectScreen"
        component={AdoptDirectScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Tab.Navigator
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
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
              tabBarShowLabel: false,
              headerShown: false,
            })}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="List" component={ListScreen} />
            <Tab.Screen name="Community" component={CommunityScreen} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
          </Tab.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
