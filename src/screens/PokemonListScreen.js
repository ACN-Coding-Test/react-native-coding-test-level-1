import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getPokemonList } from '../services/api.js';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/card.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import allActions from '../redux/actions/index.js';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const PokemonListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [pokemonOffset, setPokemonOffset] = useState(0);
  const [spinnerVisible, setSpinnerVisible] = useState(false);

  const pokemonList = useSelector((state) => state.pokemonState.pokemonList);

  useEffect(() => {
    // initial 10 pokemon
    if (pokemonList && pokemonList.length < 1) {
      getData(pokemonOffset);
    }
  }, [pokemonList]);

  function goBack() {
    navigation.goBack();
  }

  function getData(offset) {
    setSpinnerVisible(true);
    getPokemonList(dispatch, offset)
      .then((res) => {
        if (res) {
          dispatch(allActions.pokemonActions.appendPokemonList(res));
          setSpinnerVisible(false);
        }
        setSpinnerVisible(false);
      })
      .catch((err) => {
        console.log('getPokemonList error', err);
        setSpinnerVisible(false);
      });
  }

  function renderPokemons(item, index) {
    return <Card listItem={item} number={index + 1}></Card>;
  }

  function onLoadMore() {
    console.log('load more pokemon');
    setPokemonOffset(pokemonOffset + 10);
  }

  useEffect(() => {
    if (pokemonOffset !== 0) {
      getData(pokemonOffset);
    }
  }, [pokemonOffset]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Ionicons name="arrow-back" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10} // default 10
          data={pokemonList}
          renderItem={({ item, index }) => renderPokemons(item, index)}
          onEndReached={() => {
            onLoadMore();
          }}
          onEndReachedThreshold={0}
        />
      </View>
      <Spinner visible={spinnerVisible} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  flatListContainer: {
    height: '100%',
    flex: 1
  },
  button: {
    width: 30
  },
  iconStyle: {
    fontSize: 25,
    color: '#000000'
  }
});

export default PokemonListScreen;
