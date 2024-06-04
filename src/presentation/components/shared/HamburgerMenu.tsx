// React
import { useEffect } from 'react';
// React Native
import {
  Pressable,
  Text,
} from 'react-native';
// React Navigation
import {
  DrawerActions,
  useNavigation
} from '@react-navigation/native';


export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect( () => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer() ) }>
          <Text>Menu</Text>
        </Pressable>
      )
    })
  }, [] );

  return <></>
}
