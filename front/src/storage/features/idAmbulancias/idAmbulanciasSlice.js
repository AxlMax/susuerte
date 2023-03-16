import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    idTrash: 0,
    idWrech: 0 
}

export const idAmbulanciasSlice = createSlice({
    name : "setIdTrash",
    initialState,
    reducers:{
        setIdTrash:(state, action) => {
            state.idTrash = action.payload
        },
        setIdWrech:(state, action) => {
            state.idWrech = action.payload
        },
        
    }
})

export const {setIdTrash, setIdWrech} = idAmbulanciasSlice.actions

export default idAmbulanciasSlice.reducer