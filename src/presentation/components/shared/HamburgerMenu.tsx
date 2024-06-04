// React
import { useEffect } from 'react';
// React Native
import {
  Pressable,
} from 'react-native';
// React Navigation
import {
  DrawerActions,
  useNavigation
} from '@react-navigation/native';
// Components
import { IonIcon } from '../../components';
// Theme
import { globalColors } from '../../theme';


export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect( () => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ paddingLeft: 10 }}
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer() ) }
        >
          <IonIcon
            name='menu-outline'
            size={ 30 }
            color={ globalColors.primary }
          />
        </Pressable>
      )
    })
  }, [] );

  return <></>
}
