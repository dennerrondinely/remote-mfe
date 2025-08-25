import { StatusBar } from 'react-native';
import RemoteContainerScreen from './src/screens/RemoteContainerScreen';
import { colors } from './src/constants/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <SafeAreaProvider>
        <RemoteContainerScreen />
      </SafeAreaProvider>
    </>
  );
}

export default App;
