import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { getBackgroundColor, getTypeContainerColor } from '../utils/pokemonUtils';
import { globalStyles } from '../utils/style';

const CardComponent = (props) => {
  const navigation = useNavigation();
  const pokemonName = props.listItem.name;
  const pokemonMainType = props.listItem.types[0].type.name;
  const pokemonImage = props.listItem.default_img;
  const number = props.number;

  function viewPokemonDetail() {
    navigation.navigate('PokemonDetailScreen', { item: props.listItem, number });
  }

  function renderTypes() {
    return (
      <View>
        {props.listItem.types &&
          props.listItem.types.length > 0 &&
          props.listItem.types.map((type, index) => {
            return (
              <View
                key={type.type.name}
                style={[
                  styles.eachTypeContainer,
                  {
                    backgroundColor: getTypeContainerColor(pokemonMainType)
                  }
                ]}
              >
                <Text style={styles.types}>{type.type.name}</Text>
              </View>
            );
          })}
      </View>
    );
  }

  return (
    <Card
      containerStyle={{
        padding: 10,
        backgroundColor: getBackgroundColor(pokemonMainType),
        borderRadius: 15,
        flex: 1
      }}
    >
      <View style={globalStyles.flexDirectionRow}>
        <Text style={styles.label}>
          {number}. {pokemonName}
        </Text>
      </View>

      <View style={styles.topSection}>
        <View style={styles.typesContainer}>{renderTypes()}</View>

        <Image
          style={styles.image}
          source={{
            uri: pokemonImage
          }}
        />
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.viewButton} onPress={viewPokemonDetail}>
          <Text style={globalStyles.boldText}>View</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  typesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  eachTypeContainer: {
    height: 20,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5
  },
  label: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  },
  topSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  bottomSection: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 20
  },
  viewButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 20
  },
  image: {
    height: 80,
    width: 80
  },
  types: {
    color: '#fff',
    textTransform: 'capitalize'
  }
});

export default CardComponent;
