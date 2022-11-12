import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup, fireEvent} from 'react-native-testing-library';
import {Header} from '..';
import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';

afterEach(cleanup);

describe('testing custom input', () => {
  const wrapper = renderer.create(
    <Header
      title={'PokeDex'}
      statusBarColor="red"
      backgroundColor="white"
      isMain={true}
    />,
  );

  it('Should render Header', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should fire onChange events', () => {
    const mockedDispatch = jest.fn();
    const {getByTestId} = render(
      <Header
        title={'PokeDex'}
        statusBarColor="red"
        backgroundColor="white"
        isMain={true}
      />,
    );

    const button = getByTestId('back-button');
    fireEvent.press(button);

    expect(mockedDispatch).toHaveBeenCalledWith(CommonActions.goBack());
  });
});
