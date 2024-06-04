// React Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Components
import { HamburgerMenu } from '../components';
// Screens
import {
  HomeScreen,
  ProductScreen,
  ProductsScreen,
  SettingsScreen
} from '../screens';


export type RootStackParams = {
  Home: undefined;
  Product: { id: number, name: string };
  Products: undefined;
  Settings: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <>
      <HamburgerMenu />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent'
          }
        }}
      >
        <Stack.Screen name='Home' component={ HomeScreen } />
        <Stack.Screen name='Product' component={ ProductScreen } />
        <Stack.Screen name='Products' component={ ProductsScreen } />
        <Stack.Screen name='Settings' component={ SettingsScreen } />
      </Stack.Navigator>
    </>
  );
}
