// React Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
// Screens
import { ProfileScreen } from '../screens';
// Router
import { StackNavigator } from './StackNavigator';


const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='StackNavigator' component={ StackNavigator } />
      <Drawer.Screen name='Profile' component={ ProfileScreen } />
    </Drawer.Navigator>
  );
}
