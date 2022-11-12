import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup, fireEvent} from 'react-native-testing-library';
import {DateInput} from '..';

afterEach(cleanup);

jest.mock('@react-native-community/datetimepicker', () => jest.fn());

describe('testing custom input', () => {
  const wrapper = renderer.create(<DateInput value={new Date()} />);

  it('Should render DateInput', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  //   it.only('should fire onChange with new date', async () => {
  //     const onChange = jest.fn();

  //     const rendered = render(
  //       <DateInput onChange={onChange} value={new Date()} />,
  //     );

  //     const dateInputComponent = rendered.queryAllByTestId('dateInput');

  //     // console.log('dateInput', dateInputComponent);
  //     fireEvent(dateInputComponent, 'change', new Date());

  //     // expect(onChange).toHaveBeenCalledWith(new Date());
  //   });
});
