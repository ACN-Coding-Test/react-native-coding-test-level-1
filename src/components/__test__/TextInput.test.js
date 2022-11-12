import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup, fireEvent} from 'react-native-testing-library';
import {TextInput} from '..';

afterEach(cleanup);

describe('testing custom input', () => {
    const wrapper = renderer.create(
        <TextInput
            testID="Name"
            value={'janie'}
            label="Name"
            errorLines="Enter your name correctly."
            affix
            affixLength="/50"
            keyInfo="name"
            maxlength={50}
        />
    );

    it('Should render TextInput', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should fire onChange events', () => {
        const onChange = jest.fn();
        const rendered = render(
            <TextInput onChange={onChange} testID="input" />
        );
        const inputComponent = rendered.getByTestId('input');

        fireEvent(inputComponent, 'changeText', 'test Input');

        expect(onChange).toHaveBeenCalledWith('test Input');
    });
});
