import { View ,Text,StyleSheet,SafeAreaView, Pressable } from "react-native";
import QuestionCard from "../components/QuestionCard";
import Entypo from '@expo/vector-icons/Entypo';

import questions from "../questons/question";
import CustomButton from "../components/CustomButton";
import { useState,useContext, useEffect } from "react";
import {useQuizContext } from "../providers/QuizeProvider";
import Card from "../components/Card";
const question =questions[1] ;
  export default function QuizScreen(){ 
const {question,questionIdx,onNext,score,totalQuestion,bestScore}=useQuizContext();
const [time,setTime] =useState(20);

useEffect(()=>{
//start count down
setTime(4)
 const interval = setInterval(() => {
    setTime((t)=>t-1)
}, 1000);
return ()=>{
    clearInterval(interval)
}


},[question])
console.log("time",time)
useEffect(()=>{
    if(time<=0){
        onNext()
    }
},[time])

    // const [questionIdx,setQuestiondx]=useState(0);
    // const question =questions[questionIdx]

  
    return (
        <SafeAreaView style ={styles.page}>
 <View style={styles.container}>

{/* Header */}
<View>
<Text  style={styles.title}>Question {questionIdx+1}/{totalQuestion}</Text>
</View>
{/* Body */}
{ question?(<View>
<QuestionCard  question ={question}/>
<Text style={styles.time}>{time} s</Text>
</View>):(
    <Card title="Well done">
<Text>
    Correct answers :{score}/{totalQuestion}
</Text>
<Text>Best Score :{bestScore}</Text>
    </Card>
)}


{/* Footer */}
<CustomButton title={questionIdx>=totalQuestion?"Restart":"Next"} rightIcon={<Entypo name="arrow-long-right" size={24} color="white"/>}
onLongPress={()=> console.log("Button Long Pressed")}
onPress={()=>onNext()}/>
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