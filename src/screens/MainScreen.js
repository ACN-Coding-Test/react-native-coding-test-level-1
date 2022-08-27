import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView, ScrollView, StyleSheet, useColorScheme, View, Dimensions, ImageBackground,
    Image, AppRegistry, TouchableOpacity, Modal, FlatList, TouchableWithoutFeedback, Linking, RefreshControl, BackHandler, Alert
} from 'react-native';
import {
    Button, Text, Center, Box, useColorModeValue, Container, Header,
    Title,  Left, Right, Body, Item, Input, Card, CardItem, Footer, FooterTab, Content, Thumbnail, Tab, Tabs, ScrollableTab, Form,
    TabHeading
} from "native-base";

import { viewStyle, buttonStyle } from '../utils/css/global_css/index';
import { sWidth, sHeight } from '../utils/constant/phoneSize';


class MainScreen extends React.Component {
 

    constructor(props) {
        super(props);
        this.state = {
         
        };

    }


    componentDidMount= async() =>{
        const { navigation } = this.props;
 
        this.focusListener = navigation.addListener('focus', async () => {
        
        });
    }

    render() {

         const { navigation } = this.props;

        return (
           
            <View style={viewStyle.views}>
                <Button style={buttonStyle.btn} onPress={() => { navigation.navigate('CatalogScreen') }}>
                    <Text style={buttonStyle.btnText}>{"View Catalog"}</Text>
                </Button>
            </View>
        );

    }
}

export default MainScreen;
