import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'

const { width, height }= Dimensions.get("window");
export const styles = StyleSheet.create({
    containerHeaderBlue:{
      backgroundColor: '#06b6d4',
      borderStyle: 'none',
      borderWidth:0
    },
    headerTitle:{
      fontSize:14,
      textTransform: 'capitalize',
    },
      containerBlue: {
        flex: 1,
        backgroundColor: '#06b6d4',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        padding:20,
        
      },
      containerGray: {
        width:'100%',
        backgroundColor: '#f4f4f5',
        flex:1,
        overflow: 'visible'
      },
      containerWhite: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 16,
        padding:20,
      },
      bannerImage:{
        width: '100%',
        height:160,
      
      },
      header:{
        fontSize: 20,
        color: '#fff',
        fontWeight: '900',
        textTransform: 'uppercase',
      },
      header2:{
        fontSize: 18,
        color: '#fff',
        fontWeight: '900',
        textTransform: 'uppercase',
      },
      paragraph:{
        fontSize: 14,
        color: '#fff',
      },
      text:{
        color:'#fff',
      },
      button:{
        padding:4,
      },
      inputWrapper:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexGrow:1,
        flexDirection:'row',
        backgroundColor:'#f9fafb',
        borderRadius:15,
        paddingLeft:20,
        paddingRight:20,
      },
      inputText:{
        flexGrow:1,      
        paddingTop:10,
        paddingBottom:10,
        color: '#27272a',
        fontSize: 14,
        backgroundColor:'#f9fafb',
        borderColor:'#f9fafb',
        borderRadius:15
      },
      subContainer:{
        width:'100%',
        maxWidth:450,
        zIndex:-10,
        display:'flex',
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
      },
      inputContainer:{
        width:'100%',
        display:'flex',
        flexDirection:"column",
        gap:8
      },
      shadow: {
        shadowColor: '#000',      // Shadow color
        shadowOpacity: 0.1,       // Shadow opacity (0.0 - 1.0) - Increase opacity for a darker shadow
        shadowRadius: 2,          // Shadow radius
        elevation: 2,             // Elevation (for Android)
        // Additional shadow properties (optional)
        shadowOffset: {
          width: 0,              // Horizontal offset
          height: 2,             // Vertical offset
        },
      },
})