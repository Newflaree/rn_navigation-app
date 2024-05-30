// React Native
import {
  Text,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  DrawerActions,
  useNavigation
} from '@react-navigation/native';
import { PrimaryButton } from '../../components';


export const ProfileScreen = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top + 10
      }
    }>
      <Text style={{ marginBottom: 10 }}>ProfileScreen</Text>

      <PrimaryButton
        label='Abrir menu'
        onPress= { () => navigation.dispatch( DrawerActions.toggleDrawer() ) }
      />
    </View>
  );
}
