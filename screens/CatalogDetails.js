import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../Components/Card'
import { Colors, Typography } from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CatalogDetails = ({ navigation, route }) => {
  const [data, setData] = useState([])

  const getData = async () => {
    let options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    };
    await fetch(
      route.params.URL,
      options,
    ).then(response => {
      response.json().then(res => {
        console.log(res.generation);
        setData(res.generation);
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
    <View flex={1}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.width}>
        <Icon
          name="arrow-left"
          color={Colors.BLACK}
          size={26}
          style={styles.backButton}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <Card>
          <Text style={Typography.extraSmallTextBold}>Name: {route.params.name}</Text>
          <Text style={Typography.extraSmallTextBold}>URL : {data.url}</Text>
          <Text style={Typography.extraSmallTextBold}>Generation: {data.name}</Text>
        </Card>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  backButton: { marginLeft: 5, marginTop: 5 },
  width: { width: 60 }
});
export default CatalogDetails;
