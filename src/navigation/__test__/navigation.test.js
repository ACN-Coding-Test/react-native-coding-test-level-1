import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {NativeBaseProvider} from 'native-base';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {store} from '../../redux';
import AppNavigator from '../index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing react navigation', () => {
    test('page contain 2 items', async () => {
        const component = (
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        );

        render(component);

        const contactButton = await screen.findByText('Navigate Contact');
        const contactCatalog = await screen.findByText('View Catalog');

        expect(contactButton).toBeTruthy();
        expect(contactCatalog).toBeTruthy();
    });

    //   test('navigate to contact us page', async () => {
    //     const component = (
    //       <Provider store={store}>
    //         <NativeBaseProvider>
    //           <NavigationContainer>
    //             <AppNavigator />
    //           </NavigationContainer>
    //         </NativeBaseProvider>
    //       </Provider>
    //     );

    //     render(component);
    //     const toClick = await screen.findByText('Navigate Contact');

    //     fireEvent(toClick, 'press');

    //     expect(push).toHaveBeenCalledWith('contact');
    //   });
});
