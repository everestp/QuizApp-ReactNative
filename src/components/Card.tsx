import { Children } from "react";
import { View ,Text,StyleSheet} from "react-native";
import { PropsWithChildren } from "react";

type Card = PropsWithChildren<{
    title:string
    children :React.ReactNode
}>

export default function Card({title,children}:PropsWithChildren<Card>){
    return (
        
       <View style ={styles.questionCard} id= {title}>
                  
                   <Text style={styles.title}>{title}</Text>  
                   {children}
                   </View>
    )
}  
 const styles = StyleSheet.create({
    questionCard :{
        backgroundColor :'white',
        padding :20,
        paddingVertical :40,
        borderRadius :20,
        gap :20,

        // shadow
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    title:{
fontSize :24,
fontWeight :'400',
    },
 })