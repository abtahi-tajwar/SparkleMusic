import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { youtubeAPI } from '../../http/axios'
import axios, { AxiosResponse } from 'axios'
import { apis } from '../../http/routes'
import * as FileSystem from 'expo-file-system'
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

export const downloadMusicFromYoutube = createAsyncThunk(
    'youtube/download',
    async ({ title, id } : { title: string, id: string }, thunkAPI) => {
        const url = 'https://youtube-mp36.p.rapidapi.com/dl'
        const options = {
            method: 'GET',
            params: {id},
            headers: {
              'X-RapidAPI-Key': process.env.RAPID_API_KEY,
              'X-RapidAPI-Host': process.env.RAPID_API_HOST
            }
        };

        try {
            const generatedMp3 : AxiosResponse<APIResponse.YoutubeToMp3> = await axios.get(url, options)
            const downloadedAt = await downloadFromUrl({ url: generatedMp3.data.link, title })
            return {generatedMp3, downloadedAt}
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

const downloadFromUrl = async ({ title, url } : { title: string, url: string }) => {
    const downloadResumable = FileSystem.createDownloadResumable(
        url,
        FileSystem.documentDirectory + `${title}.mp3`,
        {},
        (downloadProgress) => {
          const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
          console.log("Download progress", progress)
        }
      );
  
      try {
        const data = await downloadResumable.downloadAsync();
        console.log('Finished downloading to ', JSON.stringify(data?.uri));
      } catch (e) {
        console.error(e);
      }
}

export default youtubeSlice.reducer