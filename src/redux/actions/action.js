import {SET_BMI, SET_DATA, SET_STATE} from "./actiontype"


export const setbmi=(payload)=>{
     return{
         type:SET_BMI,
         payload
     }
}
export const appstate=(payload)=>{
    return{
        type:SET_STATE,
        payload
    }
}
export const appsdata=(payload)=>{
    return{
        type:SET_DATA,
        payload
    }
}


