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

import { headerStyle } from '../utils/css/global_css/index';
import { modelStyle } from '../utils/css/screen_css/DetailScreen_css';
import { sWidth, sHeight } from '../utils/constant/phoneSize';
import HTTP from '../services/http';

class DetailScreen extends React.Component {
 

    constructor(props) {
        super(props);
        this.state = {
            details: []
        };

    }

    componentDidMount= async() =>{
        const { navigation } = this.props;
 
        this.getPokemonDetails()
    }

    getPokemonDetails =async() =>{
        let url = this.props.route.params.url
        let result = await new HTTP().get(url);
       // console.log(result)

        this.setState({details: result})
    }

    render() {

         const { navigation } = this.props;

        return (
           
            <Content>
                <Header style={headerStyle.headers}>
                    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                    <Left style={headerStyle.left}>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Text style={headerStyle.text}>{"<"}</Text>
                        </Button>
                    </Left>
                    <Body style={headerStyle.body}>
                        <Title style={headerStyle.title}>{this.props.route.params.name}</Title>
                    </Body>
                    <Right style={headerStyle.right}>
                    </Right>
                </Header>

                <View>
                    <Text>Details</Text>
                    <Text>Height: {this.state.details.height}</Text>
                    <Text>Weight: {this.state.details.weight}</Text>
                </View>
            </Content>
        );

    }
}

export default DetailScreen;
