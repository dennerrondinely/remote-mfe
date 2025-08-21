import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import RemoteScreen from './RemoteScreen';

export default function RemoteContainerScreen() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <SafeAreaProvider>
        <RemoteScreen />
      </SafeAreaProvider>
    </>
  );
}
