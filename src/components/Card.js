import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import theme from "../theme";

function Card(props) {
  const { onPress, title } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

Card.defaultProps = {
  title: "",
  onPress: () => {},
};

Card.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderRadius: theme.borderRadius.default,
    width: Dimensions.get("window").width - theme.padding.default * 2,
    height: 100,
    marginBottom: theme.padding.default,
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.body,
  },
});

export default Card;
