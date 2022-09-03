import React from 'react';
import NavigationStack from './src/navigation/AppNavigator';
import {
  LogBox,
} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
console.disableYellowBox = true;

const App = () => {

  return (
    <NavigationStack/>
  );
};

export default App;