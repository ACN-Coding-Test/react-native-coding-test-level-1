import { render, screen, fireEvent } from '@testing-library/react-native';
import ContactUsScreen from '../screens/ContactUsScreen';
import { test } from '@jest/globals';

describe('Test: Contact Us Screen', () => {

	test('1: disabled button if name and email are empty', () => {
		render(<ContactUsScreen />);

		const submitButton = screen.getByTestId('submit');

		expect(submitButton.props.accessibilityState).toEqual({ disabled: true})
	});

	test('2: disabled button if name and email invalid', () => {

		render(<ContactUsScreen />);

		const name = screen.getByTestId('name');
		fireEvent.changeText(name, 'Test');

		const email = screen.getByTestId('email');
		fireEvent.changeText(email, 'Email');

		const submitButton = screen.getByTestId('submit');

		expect(submitButton.props.accessibilityState).toEqual({ disabled: true})
	});

	test('3: disabled button if name and email is valid', () => {
		render(<ContactUsScreen />);

		const name = screen.getByTestId('name');
		fireEvent.changeText(name, 'Test');

		const email = screen.getByTestId('email');
		fireEvent.changeText(email, 'Email@gmail.com');

		const submitButton = screen.getByTestId('submit');
		expect(submitButton.props.accessibilityState).toEqual({ disabled: false})
	});


  });
