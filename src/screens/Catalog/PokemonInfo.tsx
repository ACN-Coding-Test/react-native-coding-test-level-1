import React, {useEffect} from 'react';
import {View} from 'react-native';
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
      <View style={{flex: 1, padding: '5%'}}>
        <Surface
          style={{
            padding: '5%',
            marginTop: 10,
            elevation: 5,
            borderRadius: 5,
          }}>
          <Title style={{letterSpacing: 1.5, color: colors.blue}}>
            BASIC INFO
          </Title>
          <Subheading>Name : {name}</Subheading>
          <Subheading>Height : {height}</Subheading>
          <Subheading>Weight : {weight}</Subheading>
          <Subheading>Base Experience : {base_experience}</Subheading>
        </Surface>

        <Surface
          style={{
            padding: '5%',
            marginTop: 10,
            elevation: 5,
            borderRadius: 5,
          }}>
          <Title style={{letterSpacing: 1.5, color: colors.blue}}>
            STAT INFO ({stats.length})
          </Title>
          {stats.map((item, index) => (
            <View style={{}}>
              <Subheading>Stat Name : {item.stat.name}</Subheading>
              <Subheading>Base Stat : {item.base_stat}</Subheading>
              <Divider style={{marginBottom: 10, marginTop: 10}} />
            </View>
          ))}
        </Surface>

        <Surface
          style={{
            padding: '5%',
            marginTop: 10,
            elevation: 5,
            borderRadius: 5,
          }}>
          <Title style={{letterSpacing: 1.5, color: colors.blue}}>
            TYPES ({types.length})
          </Title>

          {types.map((item, index) => (
            <View style={{marginTop: 10}}>
              <Subheading>Name : {item.type.name}</Subheading>
            </View>
          ))}
        </Surface>

        <Surface
          style={{
            padding: '5%',
            marginTop: 10,
            elevation: 5,
            borderRadius: 5,
          }}>
          <Title style={{letterSpacing: 1.5, color: colors.blue}}>
            FORMS ({forms.length})
          </Title>

          {forms.map((item, index) => (
            <View style={{}}>
              <Subheading>Name : {item.name}</Subheading>
            </View>
          ))}
        </Surface>

        <Surface
          style={{
            padding: '5%',
            marginTop: 10,
            elevation: 5,
            borderRadius: 5,
          }}>
          <Title style={{letterSpacing: 1.5, color: colors.blue}}>
            ABILITIES ({abilities.length})
          </Title>

          {abilities.map((item, index) => (
            <View style={{}}>
              <Subheading>Name : {item.ability.name}</Subheading>
            </View>
          ))}
        </Surface>
      </View>
    </Container>
  );
};

export default PokemonInfo;
