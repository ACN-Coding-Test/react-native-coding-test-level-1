import {
    CommonActions,
    DrawerActions,
    useNavigation
} from '@react-navigation/native';
import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';

import MatterialIcon from '@expo/vector-icons/MaterialCommunityIcons';
import {Subheading} from 'react-native-paper';

type Props = {
    backgroundColor: string;
    statusBarColor: string;
    title: string;
    isMain?: boolean;
};

const Header = ({backgroundColor, statusBarColor, title, isMain}: Props) => {
    const navigation = useNavigation();
    return (
        <View
            testID="header"
            style={{height: 70, backgroundColor: backgroundColor}}>
            <StatusBar
                backgroundColor={statusBarColor}
                barStyle="light-content"
            />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: '5%',
                    paddingRight: '5%'
                }}>
                <View style={{flex: 1}}>
                    {isMain && (
                        <TouchableOpacity
                            testID="back-button"
                            onPress={() =>
                                navigation.dispatch(CommonActions.goBack())
                            }>
                            <Subheading style={{letterSpacing: 1.5}}>
                                Back
                            </Subheading>
                        </TouchableOpacity>
                    )}
                </View>
                <View style={{flex: 3}}>
                    <Text
                        style={{
                            fontSize: 20,
                            letterSpacing: 1.5,
                            textAlign: 'center'
                        }}>
                        {title}
                    </Text>
                </View>
                <View style={{flex: 1}} />
            </View>
        </View>
    );
};

export default Header;
