// React Native
import {
  View
} from 'react-native';
// React Navigation
import {
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
