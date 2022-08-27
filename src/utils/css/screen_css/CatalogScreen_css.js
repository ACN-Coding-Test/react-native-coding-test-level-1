import { StyleSheet } from 'react-native';
import { sWidth, sHeight } from '../../constant/phoneSize';

export const modelStyle = StyleSheet.create({

    cards:{
        height: 250, 
        width: 250, 
        padding: 15, 
        borderRadius: 15, 
        backgroundColor: 'white', 
        marginHorizontal: 15, 
        borderRadius: 10, 
        height: 160 
    },
    mother_v:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
    child_vOne: {
        flexDirection: 'row',
        marginBottom: 10
    },
    subTitle:{
        fontSize: 16, 
        fontWeight: 'bold'
    },
    subResult:{
        fontSize: 16, 
        marginLeft: 15
    }

});