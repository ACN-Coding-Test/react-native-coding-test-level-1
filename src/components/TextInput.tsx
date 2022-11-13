import React from 'react';
import {View} from 'react-native';
import {Subheading, TextInput} from 'react-native-paper';
import {colors} from '../utils/themes';

type ContactUs = {
    name: string;
    email: string;
    date: string;
};

type Props = {
    value: string;
    onChange: (text: string) => void;
    label: string;
    affix?: boolean;
    affixLength?: string;
    multiline?: boolean;
    numberOflines?: number;
    errorLines?: string;
    maxlength?: number;
    keyboardType?: 'number-pad' | 'default';
    keyInfo: keyof ContactUs;
    error: boolean;
    testID: string;
};

const Input = ({
    value,
    onChange,
    label,
    affix,
    affixLength,
    multiline,
    numberOflines,
    errorLines,
    maxlength,
    keyboardType,
    keyInfo,
    error,
    testID
}: Props) => {
    const textChange = (text: string) => {
        let value = text;
        if (keyInfo === 'name') {
            value = value.replace(/[^a-zA-Z ]+/g, '');
        }

        onChange(value);
    };

    return (
        <View
            style={[
                {
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: '90%',
                    alignSelf: 'center',
                    marginBottom: '5%'
                }
            ]}>
            <TextInput
                testID={testID}
                mode="outlined"
                value={value}
                label={label}
                accessibilityLabel={label}
                maxLength={maxlength ? maxlength : 1000}
                keyboardType={keyboardType ? keyboardType : 'default'}
                numberOfLines={numberOflines ? numberOflines : 1}
                onChangeText={text => textChange(text)}
                style={[{backgroundColor: 'white', height: 55}]}
                selectionColor={colors.blue}
                placeholder={'lala'}
                theme={{
                    colors: {
                        primary: error ? colors.blue : 'red',
                        text: 'black'
                    }
                }}
                right={
                    affix && affixLength ? (
                        <TextInput.Affix
                            text={`${value.length}${affixLength}`}
                        />
                    ) : null
                }
            />

            {!error && (
                <Subheading
                    style={{
                        textAlign: 'right',
                        letterSpacing: 1.3,
                        fontStyle: 'italic',
                        color: 'red'
                    }}>
                    {errorLines}
                </Subheading>
            )}
        </View>
    );
};

export default Input;
