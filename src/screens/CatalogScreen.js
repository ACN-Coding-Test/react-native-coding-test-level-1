import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView, ScrollView, StyleSheet, useColorScheme, View, Dimensions, ImageBackground,
    Image, AppRegistry, TouchableOpacity, Modal, FlatList, TextInput, TouchableWithoutFeedback, Linking, RefreshControl, BackHandler, Alert
} from 'react-native';
import {
    Button, Text, Center, Box, useColorModeValue, Container, Header,
    Title,  Left, Right, Body, Item, Input, Card, CardItem, Footer, FooterTab, Content, Thumbnail, Tab, Tabs, ScrollableTab, Form,
    TabHeading
} from "native-base";

import { flatListStyle, cardStyle } from '../utils/css/global_css/index';
import { modelStyle } from '../utils/css/screen_css/CatalogScreen_css';
import { sWidth, sHeight } from '../utils/constant/phoneSize';
import HTTP from '../services/http';

class CatalogScreen extends React.Component {
 

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            pkList: [],
        };

    }


    componentDidMount= async() =>{
        const { navigation } = this.props;
        this.getPokemonList();
 
        this.focusListener = navigation.addListener('focus', async () => {
        
        });
    }

    getPokemonList =async() =>{
        let offset = 0
        let result = await new HTTP().get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
        console.log('offset', offset)
        console.log(result.results)

        if (result.results.length > 0) {

            let temp = this.state.pkList.concat(result.results)

            this.setState({pkList: temp})
        }
    }

    render() {

         const { navigation } = this.props;

        return (
           
            <Container>
                  <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.pkList}
                    style={flatListStyle.flatlists}
                    renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('DetailScreen', {name: item.name, url: item.url})}}>
                              <Card style={cardStyle.cards}>
                                <Text>{index}. {item.name}</Text>
                              </Card>
                        </TouchableOpacity>
                    )}}
                    onEndReached={() => 
                        this.setState({offset: this.state.offset + 10}, () => {
                            this.getPokemonList()
                        })
                    }
                    onEndReachedThreshold={0.9}
                />
                             
            </Container>
        );

    }
}


export default CatalogScreen;
