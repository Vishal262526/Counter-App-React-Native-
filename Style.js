import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#2B3A55",
    },
    items:{
      flex:1,
      margin:3,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#CE7777",
      borderRadius:12
    },
    text:{
      fontSize:40,
      marginBottom:50,
      color:"#CE7777",
      fontWeight:"600"
    },
    btnContainer:{
        display:"flex",
        flexDirection:"row"
    },
    btn:{
        backgroundColor:"#CE7777",
        paddingRight:50,
        paddingLeft:50,
        paddingTop:5,
        paddingBottom:5,
        marginLeft:5,
        marginRight:5,
        borderRadius:12
    },
    btnText:{
        fontSize:35,
        color:"white",
        fontWeight:"900",
    },
    heading:{
        fontSize:45,
        color:"#CE7777",
        marginBottom:200,
        fontWeight:"900",
    
    }

  });

  export default styles