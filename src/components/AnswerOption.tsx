import { useState } from "react";
import { View ,Text,StyleSheet, Pressable} from "react-native";
import question from "../questons/question";
import { useQuizContext } from "../providers/QuizeProvider";

type AnswerOption  ={
    option :string;
    

}

export default function AnswerOption({option}:AnswerOption){
  
  const {selectedOption,setSelectedOption}=useQuizContext();
  const isSelected = option === selectedOption
    return(
        <Pressable
        
        onPress={()=>setSelectedOption(option)}
         style={[styles.container, isSelected &&{
            backgroundColor:  "#E1f396",
            borderColor :"#E1f396"
            }
        
        ]}>
            <Text>{option}</Text>
        </Pressable>
    )
}

const styles =StyleSheet.create({
container :{
    backgroundColor : "",
    borderWidth :1,
    borderColor :'lightgray',
    padding :20,
    borderRadius :100,
    
    
},

})