import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: true
}

export const ShowSidebarSlice = createSlice({
    name : "sidebarShow",
    initialState,
    reducers:{
        Change:(state, action) => {
            state.value = action.payload
        },
        

    }
})

export const {Change} = ShowSidebarSlice.actions

export default ShowSidebarSlice.reducer