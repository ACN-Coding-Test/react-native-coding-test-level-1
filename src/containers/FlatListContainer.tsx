import React from 'react';
import {Dimensions, ScrollView, StatusBar, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Header} from '../components';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').width;

type Props = {
    backgroundColor: string;
    children: React.ReactNode;
    title: string;
    statusBarColor: string;
    isMain?: boolean;
};

const Container = ({
    children,
    backgroundColor,
    title,
    statusBarColor,
    isMain
}: Props) => {
    return (
        <View
            style={{
                flex: 1,
                width,
                height,
                backgroundColor: backgroundColor
            }}>
            <StatusBar
                backgroundColor={backgroundColor}
                barStyle="light-content"
            />
            <Header
                title={title}
                statusBarColor="red"
                backgroundColor="white"
                isMain={isMain}
            />
            <View
                style={{
                    flex: 1
                }}>
                {children}
            </View>
        </View>
    );
};

export default Container;
