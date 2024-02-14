import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState: Store.Permission = {
    media: {
        canAskAgain: true,
        expires: "never",
        granted: false,
        status: "undetermined"
    }
}

export const permissionSlice = createSlice({
    name: 'permission',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        updateMediaPermisson(state, action) {
            console.log("Response", action.payload)
            state.media = action.payload
        }
    }
})

export const { updateMediaPermisson } = permissionSlice.actions

export default permissionSlice.reducer