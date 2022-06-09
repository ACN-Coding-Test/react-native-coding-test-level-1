import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import theme from "../theme";

function DateTimePicker(props) {
  const { value, inputStyles, ...otherProps } = props;
  return (
    <RNDateTimePicker
      mode="date"
      value={value}
      style={[styles.inputStyles, inputStyles]}
      {...otherProps}
    />
  );
}

DateTimePicker.defaultProps = {
  value: new Date(),
};

DateTimePicker.propTypes = {
  value: PropTypes.any,
  inputStyles: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
};

const styles = StyleSheet.create({
  inputStyles: {
    width: "100%",
    fontSize: theme.fontSizes.body,
    padding: theme.padding.default,
    borderRadius: theme.borderRadius.default,
  },
});

export default DateTimePicker;
