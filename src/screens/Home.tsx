import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Subheading} from 'react-native-paper';
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
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image source={pokemonLogo} style={styles.image} />
        </View>

        <Subheading style={styles.text}>Gotta catch 'em all</Subheading>

        <View style={styles.button_container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  image_container: {marginTop: '10%'},
  image: {resizeMode: 'contain', height: 200, width: 300, alignSelf: 'center'},
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
});

export default Home;
