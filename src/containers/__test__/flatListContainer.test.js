import React from 'react';
import {View} from 'react-native';
import renderer from 'react-test-renderer';

import FlatListContainer from '../FlatListContainer';

test('renders Loading correctly', () => {
    const tree = renderer
        .create(
            <FlatListContainer
                backgroundColor="white"
                statusBarColor="red"
                title="PokeDex"
                isMain={true}>
                <View style={{flex: 1}}></View>
            </FlatListContainer>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
