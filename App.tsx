import React from 'react';
import { Text } from 'react-native';
import { LoginScreen } from './src/presentation/pages/Login';
import { AppNavigation } from './src/presentation/navigation/AppNavigation';

function App(): React.JSX.Element {

  return (
    <AppNavigation/>
  );
}

export default App;
