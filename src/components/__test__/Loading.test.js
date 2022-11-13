import React from 'react';
import renderer from 'react-test-renderer';
import {Loading, Button, DateInput, TextInput} from '..';

test('renders Loading correctly', () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
