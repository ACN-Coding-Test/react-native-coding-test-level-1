import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Subheading, Surface, Title} from 'react-native-paper';
import {Divider} from 'native-base';
import {Container} from '../../containers';
import {Loading} from '../../components';
import {
  PokemonInfoNavigationProp,
  PokemonInfoRouteProp,
} from '../../navigation/model';
import {RootState} from '../../redux';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getPokemonInfo} from '../../redux/pokemonReducer';
import {colors} from '../../utils/themes';

type Props = {
  navigation: PokemonInfoNavigationProp;
  route: PokemonInfoRouteProp;
};

const PokemonInfo = ({route}: Props) => {
  const {url} = route.params;
  const dispatch = useAppDispatch();
  const {loading, pokemonInfo} = useAppSelector(
    (state: RootState) => state.pokemon,
  );
  const {
    name,
    height,
    weight,
    types,
    abilities,
    base_experience,
    forms,
    game_indices,
    location_area_encounters,
    moves,
    stats,
  } = pokemonInfo;

  useEffect(() => {
    dispatch(getPokemonInfo(url));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container
      backgroundColor="white"
      statusBarColor="red"
      title="PokeDex"
      isMain>
      <View style={styles.container}>
        <Surface style={styles.info_container}>
          <Title style={styles.title}>BASIC INFO</Title>
          <Subheading>Name : {name}</Subheading>
          <Subheading>Height : {height}</Subheading>
          <Subheading>Weight : {weight}</Subheading>
          <Subheading>Base Experience : {base_experience}</Subheading>
        </Surface>

        <Surface style={styles.info_container}>
          <Title style={styles.title}>
            BASIC INFO STAT INFO ({stats.length})
          </Title>
          {stats.map((item, index) => (
            <View key={index}>
              <Subheading>Stat Name : {item.stat.name}</Subheading>
              <Subheading>Base Stat : {item.base_stat}</Subheading>
            </View>
          ))}
        </Surface>
        <Surface style={styles.info_container}>
          <Title style={styles.title}>TYPES ({types.length})</Title>

          {types.map((item, index) => (
            <View key={index} style={{marginTop: 10}}>
              <Subheading>Name : {item.type.name}</Subheading>
            </View>
          ))}
        </Surface>

        <Surface style={styles.info_container}>
          <Title style={styles.title}>FORMS ({forms.length})</Title>

          {forms.map((item, index) => (
            <View key={index}>
              <Subheading>Name : {item.name}</Subheading>
            </View>
          ))}
        </Surface>

        <Surface style={styles.info_container}>
          <Title style={styles.title}>ABILITIES ({abilities.length})</Title>

          {abilities.map((item, index) => (
            <View key={index}>
              <Subheading>Name : {item.ability.name}</Subheading>
            </View>
          ))}
        </Surface>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  info_container: {
    padding: '5%',
    elevation: 5,
    borderRadius: 5,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    letterSpacing: 1.5,
    color: colors.blue,
  },

  pagination_container: {marginTop: '5%'},
  padding_container: {paddingBottom: '5%'},
  text: {
    color: colors.blue,
    letterSpacing: 1.5,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
  },
  button_container: {marginTop: '5%', alignItems: 'center'},
  card: {width: '90%', alignSelf: 'center', marginTop: '5%', elevation: 5},
});

export default PokemonInfo;
