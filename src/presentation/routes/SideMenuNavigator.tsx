// React Native
import {
  useWindowDimensions,
  View
} from 'react-native';
// React Navigation
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
// Screens
import { ProfileScreen } from '../screens';
// Router
import { BottomTabsNavigator } from './';
// Theme
import { globalColors } from '../theme';


const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
    drawerContent={ ( props ) => <CustomDrawerContent { ...props } /> }
      screenOptions={{
        drawerType: ( dimensions.width >= 750 ) ?  'permanent' : 'slide',
        headerShown: false,

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20
        }
      }}
    >
      <Drawer.Screen name='BottomTab' component={ BottomTabsNavigator } />
      <Drawer.Screen name='Profile' component={ ProfileScreen } />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = ( props: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50
        }}
      />

      <DrawerItemList { ...props } />
    </DrawerContentScrollView>
  );
}
