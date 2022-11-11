import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {
  Button,
  Card,
  DataTable,
  Subheading,
  Surface,
  Title,
} from 'react-native-paper';
import {Container, FlatListContainer} from '../../containers';
import {Loading} from '../../components';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {CatalogNavigationProp} from '../../navigation/model';
import {colors} from '../../utils/themes';
import {RootState} from '../../redux';
import {
  addOffset,
  deductOffset,
  getPokemonList,
} from '../../redux/pokemonReducer';

type Props = {
  navigation: CatalogNavigationProp;
};

const pokemonLogo = require('../../../assets/pokemon_logo.png');

const PokemonList = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const {list, loading, offset, pokemon_count} = useAppSelector(
    (state: RootState) => state.pokemon,
  );

  useEffect(() => {
    dispatch(getPokemonList(offset));
  }, [offset]);

  const [page, setPage] = React.useState(0);
  const from = page * 10;
  const to = Math.min((page + 1) * 10, pokemon_count);
  const numberOfItemsPerPage = 10;

  const navigateDetail = (url: string) => {
    navigation.navigate('pokemonInfo', {
      url: url,
    });
  };

  const renderItem = ({item}: any) => {
    return (
      <Card
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: '5%',
          elevation: 5,
        }}>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Title title="Name" subtitle={item.name} />
        <Card.Actions style={{alignSelf: 'flex-end'}}>
          <Button onPress={() => navigateDetail(item.url)}>View</Button>
        </Card.Actions>
      </Card>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <FlatListContainer
      backgroundColor="white"
      statusBarColor="red"
      title="PokeDex"
      isMain>
      <View style={{flex: 1}}>
        <View>
          <Image
            source={pokemonLogo}
            style={{
              resizeMode: 'contain',
              height: 75,
              alignSelf: 'center',
            }}
          />
        </View>

        <View style={{marginTop: '5%'}}>
          <DataTable>
            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(pokemon_count / numberOfItemsPerPage)}
              onPageChange={page => {
                setPage(page);

                console.log(page);
                // if (page === 0) {
                //   return;
                // }

                if (page > offset / 10) {
                  dispatch(addOffset());
                } else {
                  dispatch(deductOffset());
                }
              }}
              label={`${from + 1}-${to} of ${pokemon_count}`}
              numberOfItemsPerPage={numberOfItemsPerPage}
            />
          </DataTable>
        </View>

        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(Math.random())}
          contentContainerStyle={{paddingBottom: '5%'}}
          style={{flex: 1}}
        />
      </View>
    </FlatListContainer>
  );
};

export default PokemonList;
