import { StyleSheet, Dimensions } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  justifyContent: {
    justifyContent: 'center'
  },
  flexDirectionRow: {
    flexDirection: 'row'
  },
  alignItemsEnd: {
    alignItems: 'flex-end'
  },
  marginVertical5: {
    marginVertical: 5
  },
  boldText: {
    fontWeight: 'bold'
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#D7D7D7',
    marginVertical: 8,
    marginHorizontal: Dimensions.get('window').width * 0.05
  }
});
