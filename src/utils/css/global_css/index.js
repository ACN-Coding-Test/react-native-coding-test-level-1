import { StyleSheet } from 'react-native';
import { sWidth, sHeight } from '../../constant/phoneSize';

export const viewStyle = StyleSheet.create({

    views:{
        flex:1, 
        justifyContent: "center", 
        alignItems: "center"
    }

});

export const buttonStyle = StyleSheet.create({

    btn:{
      width: sWidth * 0.35,
      height: 50,
      alignSelf:'center',
      justifyContent:'center',
      borderRadius: 25
    },
    btnText:{
      fontSize: 12,
      fontFamily:'Times New Roman'
    }
    
});

export const itemStyle = StyleSheet.create({

  items:{
    height: 50, 
    width: sWidth * 0.5, 
    backgroundColor: 'white', 
    borderRadius: 25, 
    flexDirection: 'row',
    marginBottom: 10
  }
  
});

export const inputStyle = StyleSheet.create({

    inputs:{
      fontSize: 16, 
      height: '100%',
      textAlign:'center'
    }
    
});

export const touchStyle = StyleSheet.create({

  touchs:{
    flex: 1,
  }
  
});

  