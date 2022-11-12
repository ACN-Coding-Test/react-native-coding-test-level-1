import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors} from '../utils/themes';

const Loading = () => {
    return (
        <View
            testID="loading"
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color={colors.blue} />
        </View>
    );
};

export default Loading;
