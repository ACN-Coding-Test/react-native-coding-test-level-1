import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MainScreen from '../screens/MainScreen'
import ContactUsScreen from '../screens/ContactUsScreen'

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
                    name='ContactUsScreen'
                    component={ContactUsScreen}
                    options={{ title: 'ContactUsScreen', cardStyleInterpolator: forFade, animationEnabled: false }}
                />    
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator
