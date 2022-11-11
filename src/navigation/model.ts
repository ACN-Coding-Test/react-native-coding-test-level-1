import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  home: undefined;
  contact: undefined;
  catalog: undefined;

  pokemonList: undefined;
  pokemonInfo: {
    url: string;
  };
};

export type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'home'
>;
export type HomeRouteProp = RouteProp<RootStackParamList, 'home'>;

export type ContactNavigationProp = StackNavigationProp<
  RootStackParamList,
  'contact'
>;
export type ContactRouteProp = RouteProp<RootStackParamList, 'contact'>;

export type CatalogNavigationProp = StackNavigationProp<
  RootStackParamList,
  'catalog'
>;
export type CatalogRouteProp = RouteProp<RootStackParamList, 'catalog'>;

export type PokemonInfoNavigationProp = StackNavigationProp<
  RootStackParamList,
  'pokemonInfo'
>;
export type PokemonInfoRouteProp = RouteProp<RootStackParamList, 'pokemonInfo'>;
