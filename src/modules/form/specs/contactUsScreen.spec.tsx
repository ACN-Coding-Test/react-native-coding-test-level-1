import { render, screen, fireEvent } from '@testing-library/react-native';
import ContactUsScreen from '../screens/ContactUsScreen';
import { test } from '@jest/globals';
import { DefaultTheme, Provider } from 'react-native-paper';

test('Contact Us Screen', () => {
	const allQuestions = ['q1', 'q2'];
	const mockFn = jest.fn();
	// jest.mock('../../node_modules/react-native/Libraries/Animated/NativeAnimatedHelper');

	// render(<ContactUsScreen />);

	const answerInputs = screen.getAllByLabelText('name');

	// fireEvent.changeText(answerInputs[0], 'a1');
	// fireEvent.changeText(answerInputs[1], 'a2');
	// fireEvent.press(screen.getByText('Submit'));

	// expect(mockFn).toBeCalledWith({
	//   '1': { q: 'q1', a: 'a1' },
	//   '2': { q: 'q2', a: 'a2' },
	// });
  });
