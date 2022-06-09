import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput } from "react-native";

import theme from "../theme";

function Input(props) {
  const { value, inputStyles, ...otherProps } = props;
  return (
    <TextInput
      value={value}
      {...otherProps}
      style={[styles.inputStyle, inputStyles]}
      textStyle={styles.textStyle}
      underlineColorAndroid={theme.colors.transparent}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string,
};

const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",
    borderWidth: 1,
    paddingHorizontal: theme.padding.default,
    paddingVertical: theme.padding.default,
    fontSize: theme.fontSizes.body,
    borderRadius: theme.borderRadius.default,
  },
});

export default Input;
