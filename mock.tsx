jest.mock('./node_modules/react-native/Libraries/Animated/NativeAnimatedHelper');

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
	const actualNav = jest.requireActual('@react-navigation/native');
	return {
		...actualNav,
		useNavigation: () => ({
		navigate: mockedNavigate,
		}),
	};
});

jest.mock('react-native-paper', () => {
	// I am using modal component from react native paper so that is // the reason to mock react-native-paper module
	const React = require('react');
	const {View} = require('react-native');
	const RealModule = jest.requireActual('react-native-paper');
	const MockedModule = {
	  ...RealModule,
	  Portal: ({children}) => <View>{children}</View>,
	};
	return MockedModule;
});

jest.mock('@react-native-community/datetimepicker', () => {
	const React = require('react');
	return class MockPicker extends React.Component {
	  render() {
		return React.createElement('DatePicker', { date: '21.07.2020' });
	  }
	};
});
