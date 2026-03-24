import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface GorevTipi{
    id:string,
    gorevBasligi:string 
    onemDerecesi:number|1|2|3,
    gorevAciklamasi:string,
    tamamlandıMı:boolean,
}
const initialState:GorevTipi[]=[]

const goalSlice=createSlice({
    name:"goal",
    initialState,
    reducers:{
        addgoal:(state,action:PayloadAction<GorevTipi>)=>{
            state.push(action.payload)
        },
        deletegoal:(state,action:PayloadAction<string>)=>{
            return state.filter(gorev=>gorev.id!==action.payload)
        },
        yapildiİsaretle:(state,actions:PayloadAction<string>)=>{
            const secilenGorev=state.find(gorev=>gorev.id===actions.payload)
            if(secilenGorev){
                secilenGorev.tamamlandıMı=!secilenGorev.tamamlandıMı
            }
        }
    },
})

export const {addgoal,deletegoal,yapildiİsaretle}=goalSlice.actions;
export default goalSlice.reducer