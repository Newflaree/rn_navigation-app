// React Native
import { Text } from 'react-native';
// React Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Componets
import { IonIcon } from '../components';
// Routers
import {
  StackNavigator,
  TopTabsNavigator
} from './';
// Screens
import {
  Tab1Screen,
} from '../screens';
// Theme
import { globalColors } from '../theme';


const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        //headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        },
      }}
    >
      <Tab.Screen
        name='Tab1'
        options={{
          title: 'Tab1',
          tabBarIcon: ({ color }) => ( <IonIcon name='home-outline' color={ color } /> )
        }}
        component={ Tab1Screen }
      />

      <Tab.Screen
        name='Tab2'
        options={{
          title: 'Tab2',
          tabBarIcon: ({ color }) => ( <IonIcon name='person-outline' color={ color } /> )
        }}
        component={ TopTabsNavigator }
      />

      <Tab.Screen
        name='Tab3'
        options={{
          title: 'Tab3',
          tabBarIcon: ({ color }) => ( <IonIcon name='settings-outline' color={ color } /> )
        }}
        component={ StackNavigator }
      />
    </Tab.Navigator>
  );
}
