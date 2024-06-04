// React Native
import {
  Text,
  View
} from 'react-native';
// Components
import {
  HamburgerMenu,
  IonIcon
} from '../../components';


export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />

      <Text>Tab1Screen</Text>

      <IonIcon
        name='rocket-outline'
        size={ 40 }
        color='black'
      />

    </View>
  );
}
