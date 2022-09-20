import { render, screen } from '@testing-library/react-native';
import MainScreen from '../screens/MainScreen';
import { test } from '@jest/globals';

test('main screen', () => {

	const mockFn = jest.fn();
	jest.mock('@react-navigation/native', () => {
		const actualNav = jest.requireActual('@react-navigation/native');
		return {
		  ...actualNav,
		  useNavigation: () => ({
			navigate: mockFn,
		  }),
		};
	});

	render(<MainScreen />);

	const contactUs = screen.getByTestId('contactUs');
	expect(contactUs).toBeDefined();

	const Pokedex = screen.getByTestId('Pokedex');
	expect(Pokedex).toBeDefined();

  });
