import { View ,Text,StyleSheet} from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../type";
import Card from "./Card";



type QuestionCard ={
    question :Question;
}


export default function QuestionCard({question,children}:QuestionCard){
    const  selectedOption = question.options[0]
    const onOptionSelected =(option:string)=>{
        console.log("selected",option)
    }
    return (
       
            <Card title={question.title}>
            <View style={{gap:10}}> 
                {question.options.map((option,index)=>  <AnswerOption option={question.options[index]} isSelected={question.options[index] === selectedOption} onPress={()=>onOptionSelected(option)}/> )}
             
               </View>
              
            </Card>
          
    )
}

