import 'react-native-gesture-handler/jestSetup';

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {};

    return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/Utilities/Platform', () => {
    const fs = require('fs');
    const json = JSON.parse(
        fs.readFileSync('node_modules/react-native/package.json', 'utf8')
    );
    const platform = jest.requireActual(
        'react-native/Libraries/Utilities/Platform'
    );
    const version = json.version.toString().split('.');
    return {
        ...platform,
        constants: {
            ...platform.constants,
            reactNativeVersion: {
                major: version[0],
                minor: version[1],
                patch: version[2]
            }
        }
    };
});

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            dispatch: jest.fn()
        })
    };
});
//
