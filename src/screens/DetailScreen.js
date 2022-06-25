import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View } from 'react-native';

const PokemonScreen  = ({route, navigation}) => {

    const { url  } = route.params;
    const [data, setData] = useState(null);

    useEffect(() => {
    var API = url;
        fetch(
          API
        )
        .then((response)=>response.json())
        .then((responseJSON)=>{
          let apiData = JSON.stringify(responseJSON)
          setData(apiData)
        })
  });

    const _renderItem = ({item, index}) =>{
    return(
        <Text>{data}</Text>
    )
  }

    return(
        <View style={styles.inputContainer}>
        <Text>View Details</Text>
        <Text>{data}</Text>
        </View>
    )
  }

export default PokemonScreen;

const styles = StyleSheet.create({
    inputContainer:{
      flexDirection: 'row',
      justifyContent: 'center'
    },
  });
