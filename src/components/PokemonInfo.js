import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import ListItem from "./ListItem";

function PokemonInfo(props) {
  const { name, height, weight, base_experience, types, abilities } = props;

  const Types = types.map((v) => v["type"]["name"]).join(", ");
  const Abilities = abilities.map((v) => v["ability"]["name"]).join(", ");

  return (
    <View style={styles.container}>
      <ListItem title="Name" subTitle={name} />
      <ListItem title="Height" subTitle={`${height}`} />
      <ListItem title="Weight" subTitle={`${weight}`} />
      <ListItem title="Base Experience" subTitle={`${base_experience}`} />
      <ListItem title="Types" subTitle={`${Types}`} />
      <ListItem title="Abilities" subTitle={`${Abilities}`} />
    </View>
  );
}

PokemonInfo.defaultProps = {
  name: "",
  height: 0,
  weight: 0,
};

PokemonInfo.propTypes = {
  name: PropTypes.string,
  height: PropTypes.number,
  weight: PropTypes.node,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PokemonInfo;
