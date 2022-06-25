import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, ImageBackground, TextInput, Button, FlatList, Alert, SafeAreaView } from 'react-native';

const PokemonScreen  = ({navigation}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
    var API = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
        fetch(
          API
        )
        .then((response)=>response.json())
        .then((responseJSON)=>{
          let datas = responseJSON.results
          setData(datas)
        })
  });

    const _renderItem = ({item, index}) =>{
    return(
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Button
            onPress={()=> navigation.navigate("Detail", {url: item.url})}
            title="View"
          />
        </View>
    )
  }

    return(
        <View style={styles.inputContainer}>
        <Text>View Catalog</Text>
        <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item,index)=> index.toString()}
        />
        </View>
    )
  }

export default PokemonScreen;

const styles = StyleSheet.create({
    inputContainer:{
      flexDirection: 'row',
      justifyContent: 'center'
    },
    title:{
      fontSize: 18
    },
  });
