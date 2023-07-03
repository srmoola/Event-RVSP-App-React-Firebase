import {createSlice} from "@reduxjs/toolkit"

export const imageSlice = createSlice({
    name: "imageurl",
    initialState: {value: ""},
    reducers: {
        setImageUrl: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {setImageUrl} = imageSlice.actions;

export default imageSlice.reducer;

