import React from 'react'
import DateTimePicker from '../../src/components/DateTimePicker'
import { render, waitFor } from '@testing-library/react-native';


const renderPicker = async (props) => {
  const utils = render(<DateTimePicker value={new Date()} {...props} />);
  await waitFor(() => utils.UNSAFE_getByType(DateTimePicker));
  return utils;
};


describe('DateTimePicker:', () => {
  it('renders a native Component', async () => {
    const { toJSON } = await renderPicker();
    expect(toJSON()).toMatchSnapshot();
  });
})
