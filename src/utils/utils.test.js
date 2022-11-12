import {isNameValid, isEmailValid} from '.';

test('name is valid', () => {
  expect(isNameValid('Janie')).toBe(true);
});

test('name is invalid', () => {
  expect(isNameValid('Jani2e')).toBe(false);
});

test('email is valid', () => {
  expect(isEmailValid('ezzad@gmail.com')).toBe(true);
});

test('email is invalid', () => {
  expect(isEmailValid('ezzad.com')).toBe(false);
});
