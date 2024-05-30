// React
import { useEffect } from 'react';
// React Native
import {
  Pressable,
  Text,
  View
} from 'react-native';
// React Navigation
import {
  DrawerActions,
  type NavigationProp,
  useNavigation
} from '@react-navigation/native';
// Routes
import { type RootStackParams } from '../../routes';
// Components
import { PrimaryButton } from '../../components';
// Theme
import { globalStyles } from '../../theme';


export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect( () => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={ () => navigation.dispatch( DrawerActions.openDrawer() ) }
        >
          <Text>Menu</Text>
        </Pressable>
      )
    });
  }, [] );

  return (
    <View style={ globalStyles.container }>
      <PrimaryButton
        onPress={ () => navigation.navigate( 'Products' ) }
        label='Productos'
      />

      <PrimaryButton
        onPress={ () => navigation.navigate( 'Settings' ) }
        label='Settings'
      />
    </View>
  );
}
