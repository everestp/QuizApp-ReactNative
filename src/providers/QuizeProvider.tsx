import { PropsWithChildren, useContext, useState,createContext } from "react";


import questions from "../questons/question";
import { Question } from "../type";
 

type QuizContext ={
    question? :Question,
    questionIdx :number,
    onNext :()=> void,
    selectedOption?:string,
    score:number
    setSelectedOption :(newOption :string)=> void
    totalQuestion :number
}
const QuizContext = createContext<QuizContext>({
    questionIdx :0,
    onNext :()=>{},
    setSelectedOption:()=>{},
    score:0,
    totalQuestion :0
    
});


export default function QuizProvider({children}:PropsWithChildren){
       const [questionIdx,setQuestionIdx]=useState(0);
        const question =questions[questionIdx]
        
    const [selectedOption,setSelectedOption] =useState<string | undefined>();
    const [score ,setScore]=useState(0)
    const isFinished = questionIdx>=questions.length;
    const restart =()=>{
        setQuestionIdx(0);
        setSelectedOption("");
        setScore(0);
    }
        const onNext = ()=>{
            if(isFinished){
                restart();
                return;
            }

            //check if answer is correct
            if(selectedOption==question?.correctAnswer){
                setScore((currScore)=>currScore+1)
            }
            setQuestionIdx((currValue)=> currValue+1)
        }
        console.log("scroe",score)
    console.log("Quize Provider")
    return(
        <QuizContext.Provider value={{question,questionIdx,onNext,selectedOption,setSelectedOption,score,totalQuestion:questions.length}}>
        {children}
        </QuizContext.Provider>
    )
}
export const useQuizContext =()=>  useContext(QuizContext)
 
