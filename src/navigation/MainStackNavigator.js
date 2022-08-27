import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MainScreen from '../screens/MainScreen'
import CatalogScreen from '../screens/CatalogScreen'
import DetailScreen from '../screens/DetailScreen'

const Stack = createStackNavigator ()

const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>           
                <Stack.Screen
                    name='MainScreen'
                    component={MainScreen}
                    options={{ title: 'MainScreen', cardStyleInterpolator: forFade, animationEnabled: false }}
                /> 
                  <Stack.Screen
                    name='CatalogScreen'
                    component={CatalogScreen}
                    options={{ title: 'CatalogScreen', cardStyleInterpolator: forFade, animationEnabled: false }}
                />    
                 <Stack.Screen
                    name='DetailScreen'
                    component={DetailScreen}
                    options={{ title: 'DetailScreen', cardStyleInterpolator: forFade, animationEnabled: false }}
                />    
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator
