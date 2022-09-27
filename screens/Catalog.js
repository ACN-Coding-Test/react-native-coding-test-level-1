import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Button
} from 'react-native';
import { Typography } from '../styles';
import Card from '../Components/Card'

const Catalog = ({ navigation }) => {
  const [data, setData] = useState([])
  const [offset, setOffset] = useState(10)

  const getData = async () => {
    let options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    };
    await fetch(
      `https://pokeapi.co/api/v2/ability/?limit=10&offset=` + offset,
      options,
    ).then(response => {
      response.json().then(res => {
        setData(res);
        setOffset(offset + 10)
      });
    });
  };

  useEffect(
    React.useCallback(() => {
      {
        getData();
      }
      return () => { };
    }, []),
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        horizontal={false}
        scrollEnabled
        onEndReached={() => {
          if (offset < data.count)
            getData()
        }}
        scrollEventThrottle={16}
        data={data.results}
        keyExtractor={item => item}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.cardContainer} key={index}>
              <Card>
                <Text style={Typography.smallTextBold}>{item.name}</Text>
                <Button title='View'
                  onPress={() => navigation.navigate('CatalogDetails', { URL: item.url, name: item.name })}
                />
              </Card>
            </View>
          );
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    marginVertical: 10
  }
});

export default Catalog;
