import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { youtubeAPI } from '../../http/axios'
import { AxiosResponse } from 'axios'
import { apis } from '../../http/routes'
// Define the initial state using that type
const initialState: Store.Permission = {
    media: {
        canAskAgain: true,
        expires: "never",
        granted: false,
        status: "undetermined"
    }
}

type SearchMusicParamType = { q : string, maxResults: number }
export const searchMusicFromYoutube = createAsyncThunk(
    'youtube/search',
    async ({ q, maxResults = 5 } : SearchMusicParamType, thunkAPI) => {
        try {
            const searchResult : AxiosResponse<APIResponse.YoutubeSearch> = await youtubeAPI.get(apis.youtubeSearch({ q: q, maxResults: maxResults }))
            // const ids = searchResult.data.items.map(item => item.id.videoId).join(",")
            // const detailsSearchResult = await youtubeAPI.get(apis.getYoutubeVideosByIds({ idsString: ids }))
            return searchResult.data
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
    }
})

// export const { updateMediaPermisson } = youtubeSlice.actions

export default youtubeSlice.reducer