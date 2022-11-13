import 'react-native';
import React from 'react';
// import {render, fireEvent} from '../../../jest/helper';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Contact from '../Contact';
import {store} from '../../redux';
import renderer from 'react-test-renderer';

import {render, screen, fireEvent} from '@testing-library/react-native';

describe('form edit', () => {
  const wrapper = renderer.create(
    <Provider store={store}>
      <NativeBaseProvider>
        <Contact />
      </NativeBaseProvider>
    </Provider>,
  );

  it('Should render Button', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('change name input', () => {
    const component = (
      <Provider store={store}>
        <NativeBaseProvider>
          <Contact />
        </NativeBaseProvider>
      </Provider>
    );

    render(component);

    const testName = 'Ezanie';
    fireEvent.changeText(screen.getByLabelText('Name'), testName);

    expect(namefield.props.value).toEqual(testName);
  });

  test('change email input', async () => {
    const component = (
      <Provider store={store}>
        <NativeBaseProvider>
          <Contact />
        </NativeBaseProvider>
      </Provider>
    );

    render(component);

    // const emailfield = await screen.getByLabelText('emailInput');
    // expect(emailfield).toBeTruthy();
    // fireEvent.changeText(emailfield, testEmail);

    const testEmail = 'ezzadsyafik@gmail.com';
    fireEvent.changeText(screen.getByLabelText('Email'), testEmail);

    expect(emailfield.props.value).toEqual(testEmail);
  });
});
