import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {Subheading, Surface} from 'react-native-paper';

type Props = {
  label: string;
  onPress: () => void;
  backgroundColor: string;
};

const Button = ({label, onPress, backgroundColor}: Props) => {
  return (
    <Surface
      style={{
        width: '90%',
        elevation: 5,
        height: 60,
        borderRadius: 5,
        marginTop: '5%',
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Subheading style={{color: 'white', letterSpacing: 1.5, fontSize: 18}}>
          {label}
        </Subheading>
      </TouchableOpacity>
    </Surface>
  );
};

export default Button;
