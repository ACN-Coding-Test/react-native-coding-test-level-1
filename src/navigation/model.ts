import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Contact: undefined;
    Catalog: undefined;

    PokemonList: undefined;
    PokemonInfo: {
        url: string;
    };
};

export type HomeNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Home'
>;
export type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type ContactNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Contact'
>;
export type ContactRouteProp = RouteProp<RootStackParamList, 'Contact'>;

export type CatalogNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Catalog'
>;
export type CatalogRouteProp = RouteProp<RootStackParamList, 'Catalog'>;

export type PokemonInfoNavigationProp = StackNavigationProp<
    RootStackParamList,
    'PokemonInfo'
>;
export type PokemonInfoRouteProp = RouteProp<RootStackParamList, 'PokemonInfo'>;
