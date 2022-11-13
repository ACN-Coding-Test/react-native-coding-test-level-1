import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import {Button} from '..';
import addSeconds from 'date-fns/addSeconds';

describe('testing custom button', () => {
  const wrapper = renderer.create(
    <Button
      onPress={() => console.log('a')}
      backgroundColor="red"
      label="NEXT"
    />,
  );

  it('Should render Button', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should properly render the label', () => {
    const rendered = render(<Button label={'New Label'} />);
    const buttoncomponent = rendered.getByTestId('label');

    expect(buttoncomponent.props.children).toEqual('New Label');
  });

  it('should properly render background red', () => {
    const rendered = render(<Button label={'New Label'} />);
    const buttoncomponent = rendered.getByTestId('button');

    expect(buttoncomponent.props.style).toMatchObject({width: '90%'});
  });

  it('should trigger onPress', () => {
    const onPressMock = jest.fn();

    const rendered = render(
      <Button label={'New Label'} onPress={onPressMock} />,
    );
    const buttoncomponent = rendered.getByTestId('button');

    fireEvent.press(buttoncomponent);

    expect(onPressMock).toBeTruthy();
  });
});
