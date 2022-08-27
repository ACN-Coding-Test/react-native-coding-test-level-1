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

export const flatListStyle = StyleSheet.create({

  flatlists:{
    marginTop: 25
  }
  
});

export const cardStyle = StyleSheet.create({

  cards:{
    height: 65, 
    padding: 10
  }
  
});

export const headerStyle = StyleSheet.create({

  headers:{
    backgroundColor: 'gray', 
    height: 80, 
    elevation: 0, 
    paddingTop: 20 
  },
  left:{
    flex: 1 
  },
  body:{
    flex: 1, 
    alignItems: 'center'
  },
  right:{
    flex: 1
  },
  title:{
    textAlign: 'center', 
    fontWeight: 'bold', 
    fontSize: 15
  },
  text:{
    fontSize: 25
  }
});

  