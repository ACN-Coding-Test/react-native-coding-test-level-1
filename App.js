import React from 'react';
import { Provider } from 'react-redux';
import NavigatorContainer from './src/modules/navigators'
import store from './src/modules/store/store'

export default function App() {
  return (
	<Provider store={store}>
		<NavigatorContainer />
	</Provider>
  );
}
