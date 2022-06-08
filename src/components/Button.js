import  React from 'react';
import PropTypes from 'prop-types'
import { TouchableOpacity,StyleSheet,Text } from 'react-native';

import theme from "../theme";

function Button(props) {
  const {onPress,title}=props; 
  return (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
  </TouchableOpacity>
  );
}

Button.defaultProps = {
    title:"",
    onPress:()=>{}
 }

Button.propTypes = {
   title:PropTypes.string,
   onPress:PropTypes.func
}
  

const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor:theme.colors.primary,
      paddingHorizontal:theme.padding.default,
      paddingVertical:theme.padding.default,
      borderRadius:theme.borderRadius.default,
      minWidth:150,
      alignItems:"center"
    },
    titleStyle:{
        color:theme.colors.textColor,
        fontSize:theme.fontSizes.body
    }
});


export default Button;
