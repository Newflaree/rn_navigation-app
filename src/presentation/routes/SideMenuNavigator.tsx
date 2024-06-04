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
// Components
import { IonIcon } from '../components';
// Router
import { BottomTabsNavigator } from './';
// Screens
import { ProfileScreen } from '../screens';
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
      <Drawer.Screen
        options={{ drawerIcon: ({ color }) => ( <IonIcon name='accessibility-outline' color={ color } /> ) }}
        name='BottomTab'
        component={ BottomTabsNavigator }
      />
      <Drawer.Screen
        options={{ drawerIcon: ({ color }) => ( <IonIcon name='american-football-outline' color={ color } /> ) }}
        name='Profile'
        component={ ProfileScreen }
      />
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
