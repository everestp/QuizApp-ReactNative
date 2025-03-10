import { View ,Text,StyleSheet} from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../type";
import Card from "./Card";
import { useState } from "react";



type QuestionCard ={
    question :Question;
}


export default function QuestionCard({question}:QuestionCard){
    // const  selectedOption = question.options[0]

    return (
       
            <Card title={question.title} >
                
            <View style={{gap:10}}> 
                {question.options.map((option,index)=>  <AnswerOption 
                  key ={option}
                    option={option}
                    
                    /> )}
            
               </View>
              
            </Card>
          
    )
}

