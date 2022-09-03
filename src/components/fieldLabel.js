import React from 'react';
import { StyleSheet, Text } from 'react-native';

const FieldLabel = (props) => {
  //   console.log(props);

  const fieldLabel = props.label;

  return <Text style={styles.textLabelStyle}>{fieldLabel}:</Text>;
};

const styles = StyleSheet.create({
  textLabelStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    fontSize: 18
  }
});

export default FieldLabel;
