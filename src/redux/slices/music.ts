import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import * as MediaLibrary from 'expo-media-library'
import { PagedInfo, Asset } from 'expo-media-library'

// Define the initial state using that type
const initialState : Store.Music = {
    musics: [],
    loading: {
        getMusicFromDevice: false
    },
    error: {
        getMusicFromDevice: null
    }
}

export const getMusicsFromDevice = createAsyncThunk(
    'music/get',
    async (_, thunkAPI) => {
        try {
            const response = await MediaLibrary.getAssetsAsync({
                mediaType: 'audio'
            })

            return response;
        } catch (error) {
            thunkAPI.rejectWithValue({ error })
        }
    },
  )

export const permissionSlice = createSlice({
    name: 'permission',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        updateMusics(state, action) {
            state.musics = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getMusicsFromDevice.pending, (state, action) => {
            state.loading.getMusicFromDevice = true;
        })
        builder.addCase(getMusicsFromDevice.fulfilled, (state, action) => {
            state.loading.getMusicFromDevice = false;
            if (action.payload) {
                state.musics = action.payload.assets
            } 
        })
        builder.addCase(getMusicsFromDevice.rejected, (state, action) => {
            state.error.getMusicFromDevice = action.error
        })
    },
})

export const { updateMusics } = permissionSlice.actions

export default permissionSlice.reducer