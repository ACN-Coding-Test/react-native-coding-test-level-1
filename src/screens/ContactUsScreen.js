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
import  RNDateTimePicker from '@react-native-community/datetimepicker';

import { viewStyle, buttonStyle, inputStyle, itemStyle, touchStyle } from '../utils/css/global_css/index';
import { modelStyle } from '../utils/css/screen_css/ContactUsScreen_css';
import { sWidth, sHeight } from '../utils/constant/phoneSize';
import {valEmail, valLetter} from '../utils/validation/index';

class ContactUsScreen extends React.Component {
 

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email:'',
            birthday: new Date(),
            showDt: false,
            modalVisible: false
        };

    }

    componentDidMount= async() =>{
        const { navigation } = this.props;

    }

    setmodalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    validate(){
        let name = this.state.name;
        let email = this.state.email;

        if(name == '' || email == ''){
           return Alert.alert('Field must not be empty')
        }
        else if(!valLetter(name)){
            return Alert.alert('Name must contain letters only')
        }
        else if(!valEmail(email)){
            return Alert.alert('Email must be a valid email address')
        }
        else{
            this.setmodalVisible(true)
        }

    }

    render() {

         const { navigation } = this.props;
         const { modalVisible } = this.state;
        return (
          
            <View style={viewStyle.views}>
                <Item style={itemStyle.items}>
                    <Input value={this.state.name}
                        maxLength={50}
                        onChangeText={val => this.setState({ name: val })} 
                        placeholder={"User's Name"}
                        style={inputStyle.inputs}/>
                </Item>
                <Item style={itemStyle.items}>
                    <Input value={this.state.email} 
                        onChangeText={val => this.setState({ email: val })} 
                        placeholder={"User's Email"}
                        keyboardType='email-address'
                        style={inputStyle.inputs}/>
                </Item>
                <Item style={itemStyle.items}>
                    <TouchableOpacity style={touchStyle.touchs} onPress={() => { this.setState({showDt: true}) }}>
                        <Input value={this.state.birthday.toLocaleDateString()}
                        placeholder={"User's birthday"}
                        disabled 
                        style={inputStyle.inputs}/>
                    </TouchableOpacity>
                </Item>
                {
                    this.state.showDt?
                    <RNDateTimePicker
                        locale='en-MY'
                        maximumDate={new Date()}
                        value={this.state.birthday}
                        onChange={(event, date) => { this.setState({birthday: date, showDt: false}) }}
                    />
                    :
                    null
                }
                  <Button style={buttonStyle.btn} onPress={() => { this.validate() }}>
                    <Text style={buttonStyle.btnText}>{"Submit"}</Text>
                </Button>

                <Modal animationType="none" transparent={true} visible={modalVisible} >
                    <TouchableWithoutFeedback onPress={() => {
                            this.setmodalVisible(!modalVisible)
                    }}>
                    <View style={modelStyle.mother_v}>

                        <Card style={modelStyle.cards}>
                            <View style={modelStyle.child_vOne}>
                                <View>
                                    <Text style={modelStyle.subTitle}>{"User's Name :"}</Text>
                                </View>
                                <View>
                                    <Text style={modelStyle.subResult}>{this.state.name}</Text>
                                </View>
                            </View>
                            <View style={modelStyle.child_vOne}>
                                <View>
                                    <Text style={modelStyle.subTitle}>{"User's Email :"}</Text>
                                </View>
                                <View>
                                    <Text style={modelStyle.subResult}>{this.state.email}</Text>
                                </View>
                            </View>
                            <View style={modelStyle.child_vOne}>
                                <View>
                                    <Text style={modelStyle.subTitle}>{"User's Birthday :"}</Text>
                                </View>
                                <View>
                                    <Text style={modelStyle.subResult}>{this.state.birthday.toLocaleDateString()}</Text>
                                </View>
                            </View>

                        </Card>

                    </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>

            
        );

    }
}

export default ContactUsScreen;
