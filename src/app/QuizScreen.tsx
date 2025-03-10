import { View ,Text,StyleSheet,SafeAreaView, Pressable } from "react-native";
import QuestionCard from "../components/QuestionCard";
import Entypo from '@expo/vector-icons/Entypo';

import questions from "../questons/question";
import CustomButton from "../components/CustomButton";
const question =questions[1] ;
  export default function QuizScreen(){
    return (
        <SafeAreaView style ={styles.page}>
 <View style={styles.container}>

{/* Header */}
<View>
<Text style={styles.title}>Question 1/5</Text>
</View>
{/* Body */}
<View>
<QuestionCard  question ={question}/>
<Text style={styles.time}>20 s</Text>
</View>

{/* Footer */}
<CustomButton title="Next" rightIcon={<Entypo name="arrow-long-right" size={24} color="white"/>}
onLongPress={()=> console.log("Button Long Pressed")}
onPress={()=>console.log("Button  is Pressed ")}/>
</View>
        </SafeAreaView>
       
    )
}
  
const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        margin :20
    },
    page :{
        flex:1,
        backgroundColor :"#FDFEF4",
    },
    container :{
       
            flex:1,
            justifyContent :'space-between',
            padding :20,
        
    },
    time :{
        textAlign:'center',
        marginTop:15,
        color :'#005055',
        fontWeight :'bold'

    },
button :{
    backgroundColor :'#005055',
    padding :20,
    borderRadius:100,
    alignItems :'center',
    justifyContent :'center'
    
},
buttonText:{
    color :"white",
    fontWeight :'500',
    fontSize :16,
    letterSpacing :1.5
},
buttonIcon :{
    position :'absolute',
    right :20,
    
    
}

})