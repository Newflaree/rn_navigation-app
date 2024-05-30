// React Native
import {
  Text,
  View
} from 'react-native';
// React Navigation
import {
  StackActions,
  useNavigation
} from '@react-navigation/native';
// Components
import { PrimaryButton } from '../../components';
// Theme
import { globalStyles } from '../../theme';


export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={ globalStyles.container }>
      <Text>SettingsScreen</Text>

      <PrimaryButton
        onPress={ () => navigation.goBack() }
        label='Regresar'
      />

      <PrimaryButton
        onPress={ () => navigation.dispatch( StackActions.popToTop() ) }
        label='Regresar al Home'
      />
    </View>
  );
}
