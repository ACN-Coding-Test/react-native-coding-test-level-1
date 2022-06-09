import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import theme from "../theme";

function ListItem(props) {
  const { title, subTitle, onPress, containerStyle, ...otherProps } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.containerStyle, containerStyle]}
    >
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.subTitleStyle}>{subTitle}</Text>
    </TouchableOpacity>
  );
}

ListItem.defaultProps = {
  title: "",
  subTitle: "",
  onPress: undefined,
};

ListItem.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  containerStyle: {
    width: "100%",
    padding: theme.padding.default,
  },
  titleStyle: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.primary,
  },
  subTitleStyle: {
    fontSize: theme.fontSizes.subTitle,
  },
});

export default ListItem;
