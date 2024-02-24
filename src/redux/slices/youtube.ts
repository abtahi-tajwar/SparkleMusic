import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { youtubeAPI } from '../../http/axios'
import { AxiosResponse } from 'axios'
import { apis } from '../../http/routes'
// Define the initial state using that type
const initialState: Store.Youtube = {
    searchResults: [],
    loading: {
        searchMusicFromYoutube: false
    },
    errors: {
        searchMusicFromYoutube: null
    }
}

type SearchMusicParamType = { q : string, maxResults: number }
export const searchMusicFromYoutube = createAsyncThunk(
    'youtube/search',
    async ({ q, maxResults = 5 } : SearchMusicParamType, thunkAPI) => {
        try {
            const searchResult : AxiosResponse<APIResponse.YoutubeSearch> = await youtubeAPI.get(apis.youtubeSearch({ q: q, maxResults: maxResults }))
            return { data: searchResult.data }
        } catch (error) {
            thunkAPI.rejectWithValue({ error })
        }
    }
)

export const youtubeSlice = createSlice({
    name: 'youtube',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // updateMediaPermisson(state, action) {
        //     state.media = action.payload
        // }
    },
    extraReducers (builder) {
        // Search Music From Youtube
        builder.addCase(searchMusicFromYoutube.pending, (state, action) => {
            state.loading.searchMusicFromYoutube = true;
        }),
        builder.addCase(searchMusicFromYoutube.fulfilled, (state, action) => {
            state.loading.searchMusicFromYoutube = true;
            if (action.payload) {
                state.searchResults = action.payload.data.items
            }
        }),
        builder.addCase(searchMusicFromYoutube.rejected, (state, action) => {
            state.errors.searchMusicFromYoutube = action.error;
        })
    }
})

// export const { updateMediaPermisson } = youtubeSlice.actions

export default youtubeSlice.reducer