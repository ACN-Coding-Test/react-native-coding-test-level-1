import React from 'react';
import {StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import NavigatorContainer from './src/modules/navigators/screens'
import store from './src/modules/store/src/store'
import {
	DefaultTheme as DefaultTheme,
	Provider as PaperProvider,
} from 'react-native-paper';
import ErrorBoundary from 'react-native-error-boundary';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#003549',
	},
};

const App = () => {
	return (
		<ErrorBoundary>
			<Provider store={store}>
				<PaperProvider theme={theme}>
					<NavigatorContainer />
				</PaperProvider>
			</Provider>
		</ErrorBoundary>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});

export default App;
