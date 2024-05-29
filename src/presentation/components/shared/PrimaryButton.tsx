// React Native
import {
  Pressable,
  Text
} from 'react-native';
// Theme
import { globalStyles } from '../../theme';


interface Props {
  onPress: () => void;
  label: string;
}

export const PrimaryButton = ({ onPress, label }: Props) => {
  return (
    <Pressable
      onPress={ () => onPress() }
      style={ globalStyles.primaryButton }
    >
      <Text style={ globalStyles.buttonText }>{ label }</Text>
    </Pressable>
  );
}
