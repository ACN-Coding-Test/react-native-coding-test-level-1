import React from 'react';
import {View} from 'react-native';
import renderer from 'react-test-renderer';

import Container from '../Container';

test('renders Loading correctly', () => {
    const tree = renderer
        .create(
            <Container
                backgroundColor="white"
                statusBarColor="red"
                title="PokeDex"
                isMain={true}>
                <View style={{flex: 1}}></View>
            </Container>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
