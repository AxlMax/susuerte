import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const spaceSlice = createSlice({
    name : "space",
    initialState,
    reducers:{
        ChangeSpace:(state, action) => {
            state.value = action.payload
        },
        

    }
})

export const {ChangeSpace} = spaceSlice.actions

export default spaceSlice.reducer