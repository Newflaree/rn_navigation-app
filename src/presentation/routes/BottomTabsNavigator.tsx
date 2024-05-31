// React Native
import { Text } from 'react-native';
// React Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import {
  Tab1Screen,
  Tab2Screen,
  Tab3Screen
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
          tabBarIcon: ({ color }) => ( <Text style={{ color }}>Tab1</Text> )
        }}
        component={ Tab1Screen }
      />

      <Tab.Screen
        name='Tab2'
        options={{
          title: 'Tab2',
          tabBarIcon: ({ color }) => ( <Text style={{ color }}>Tab2</Text> )
        }}
        component={ Tab2Screen }
      />

      <Tab.Screen
        name='Tab3'
        options={{
          title: 'Tab3',
          tabBarIcon: ({ color }) => ( <Text style={{ color }}>Tab3</Text> )
        }}
        component={ Tab3Screen }
      />
    </Tab.Navigator>
  );
}
