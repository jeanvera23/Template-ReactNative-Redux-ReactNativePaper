
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store.js'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './navigation/AppNavigator.js';
import SnackBar from './components/utils/SnackBar.js';
import 'react-native-gesture-handler';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1769aa',
    secondary: 'yellow',
  },
};

export default function App() {

  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <AppNavigator />
          <SnackBar />
        </PaperProvider>
      </NavigationContainer>
    </StoreProvider>
  );
}

