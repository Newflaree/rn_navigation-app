// React Native
import {
  Text,
  View
} from 'react-native';
// React Icons
import Icon from 'react-native-vector-icons/Ionicons';
// Components
import { HamburgerMenu } from '../../components';


export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />

      <Text>Tab1Screen</Text>

      <Icon
        name='rocket-outline'
        size={ 30 }
        color='#900'
      />
    </View>
  );
}
