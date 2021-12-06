import { SET_BMI } from "../actions/actiontype";

const initialstate={
    bmistate:{
       weight:'',
       height:'',
       username:'',
       date:'',
    }
}

export const bmireducer=(state=initialstate,action)=>{
         switch(action.type){
             case SET_BMI:
                 return {
                   ...state,
                   bmistate:action.payload
                 };
             default: return state;
         }
}

export default bmireducer;