import { render, screen, fireEvent } from '@testing-library/react-native';
import MainScreen from '../screens/MainScreen';
import { test } from '@jest/globals';

test('form submits two answers', () => {
	const allQuestions = ['q1', 'q2'];
	const mockFn = jest.fn();

	render(<MainScreen />);

	// const answerInputs = screen.getAllByLabelText('answer input');

	// fireEvent.changeText(answerInputs[0], 'a1');
	// fireEvent.changeText(answerInputs[1], 'a2');
	// fireEvent.press(screen.getByText('Submit'));

	// expect(mockFn).toBeCalledWith({
	//   '1': { q: 'q1', a: 'a1' },
	//   '2': { q: 'q2', a: 'a2' },
	// });
  });
