// React Navigator
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// Components
import { HamburgerMenu } from '../components';
// Screens
import {
  AboutScreen,
  ProfileScreen
} from '../screens';


const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HamburgerMenu />

      <Tab.Navigator>
        <Tab.Screen name='Profile' component={ ProfileScreen } />
        <Tab.Screen name='About' component={ AboutScreen } />
      </Tab.Navigator>
    </>
  );
}
