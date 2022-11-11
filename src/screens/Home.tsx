import React from 'react';
import {View, Text, Image} from 'react-native';
import {Subheading, Title} from 'react-native-paper';
import {Button} from '../components';
import {Container} from '../containers';
import {HomeNavigationProp} from '../navigation/model';
import {colors} from '../utils/themes';

type Props = {
  navigation: HomeNavigationProp;
};

const pokemonLogo = require('../../assets/pokemon_logo.png');

const Home = ({navigation}: Props) => {
  const navigateContact = () => {
    navigation.navigate('contact');
  };

  const navigateCatalog = () => {
    navigation.navigate('pokemonList');
  };

  return (
    <Container backgroundColor="white" statusBarColor="red" title="PokeDex">
      <View style={{flex: 1, paddingTop: '5%', paddingBottom: '5%'}}>
        <View style={{marginTop: '10%'}}>
          <Image
            source={pokemonLogo}
            style={{
              resizeMode: 'contain',
              height: 200,
              width: 300,
              alignSelf: 'center',
            }}
          />
        </View>

        <Subheading
          style={{
            color: colors.blue,
            letterSpacing: 1.5,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: 25,
            textAlign: 'center',
            marginTop: 10,
          }}>
          Gotta catch 'em all
        </Subheading>

        <View style={{marginTop: '5%', alignItems: 'center'}}>
          <Button
            label="Navigate Contact"
            backgroundColor={colors.blue}
            onPress={navigateContact}
          />

          <Button
            label="View Catalog"
            backgroundColor={colors.blue}
            onPress={navigateCatalog}
          />
        </View>
      </View>
    </Container>
  );
};

export default Home;
