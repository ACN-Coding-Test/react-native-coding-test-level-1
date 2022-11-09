import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  home: undefined;
  contact: undefined;
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
