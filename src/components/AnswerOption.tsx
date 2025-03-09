import { useState } from "react";
import { View ,Text,StyleSheet, Pressable} from "react-native";
import question from "../questons/question";

type AnswerOptionProps  ={
    option :string;
    isSelected :boolean;
    onPress:()=> void;

}

export default function AnswerOption({option ,isSelected,onPress}:AnswerOptionProps){
  
  
    return(
        <Pressable
        
        onPress={onPress}
        id={option} style={[styles.container, isSelected?{
            backgroundColor:  "#E1f396",
            borderColor :"#E1f396"
            }:{}
        
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