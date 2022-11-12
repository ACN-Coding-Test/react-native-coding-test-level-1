jest.mock('@react-native-community/datetimepicker', function () {
  const mockComponent = require('react-native/jest/mockComponent');
  return mockComponent('@react-native-community/datetimepicker');
});
