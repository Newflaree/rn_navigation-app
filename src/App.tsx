import 'react-native-gesture-handler';

// React Native
import {
  Text,
} from 'react-native';
// React Native Natigation
import { NavigationContainer } from '@react-navigation/native';
// Routes
import { SideMenuNavigator } from './presentation/routes';


export const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
    </NavigationContainer>
  );
}
