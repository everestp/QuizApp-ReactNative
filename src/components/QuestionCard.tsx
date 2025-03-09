import { View ,Text,StyleSheet} from "react-native";
import AnswerOption from "./AnswerOption";




export default function QuestionCard(){
    return (
        <View style ={styles.questionCard}>
            <Text style={styles.question}>
               What us React Native
               <View style={{gap:10, paddingTop :20}}>
               <AnswerOption/>
               <AnswerOption/>
               <AnswerOption/>
               <AnswerOption/>
               </View>
              
            </Text>
        </View>
    )
}

const styles =StyleSheet.create({
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
    question:{
fontSize :24,
fontWeight :'500',
    },
})