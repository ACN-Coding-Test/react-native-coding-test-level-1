import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {Subheading, Surface} from 'react-native-paper';

type Props = {
    label: string;
    onPress: () => void;
    backgroundColor: string;
    testID: string;
};

const Button = ({label, onPress, backgroundColor}: Props) => {
    return (
        <Surface
            testID="button"
            style={{
                width: '90%',
                elevation: 5,
                height: 60,
                borderRadius: 5,
                marginTop: '5%'
            }}>
            <TouchableOpacity
                testID="touch"
                onPress={onPress}
                style={{
                    flex: 1,
                    backgroundColor: backgroundColor,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Subheading
                    testID="label"
                    style={{color: 'white', letterSpacing: 1.5, fontSize: 18}}>
                    {label}
                </Subheading>
            </TouchableOpacity>
        </Surface>
    );
};

export default Button;
