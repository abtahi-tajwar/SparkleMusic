import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { youtubeAPI } from '../../http/axios'
import axios, { AxiosResponse } from 'axios'
import { apis } from '../../http/routes'
import * as FileSystem from 'expo-file-system'
import { shareAsync } from 'expo-sharing'
import { Platform } from 'react-native'
import * as MediaLibrary from 'expo-media-library'
// Define the initial state using that type
const initialState: Store.Youtube = {
  searchResults: [],
  downloadProgress: 0,
  currentDownloadResumable: null,
  currentDownloadObject: null,
  loading: {
    searchMusicFromYoutube: false
  },
  errors: {
    searchMusicFromYoutube: null,
    startDownloadMusicFromYoutube: null

  }
}

type SearchMusicParamType = { q: string, maxResults: number }
export const searchMusicFromYoutube = createAsyncThunk(
  'youtube/search',
  async ({ q, maxResults = 5 }: SearchMusicParamType, thunkAPI) => {
    try {
      const searchResult: AxiosResponse<APIResponse.YoutubeSearch> = await youtubeAPI.get(apis.youtubeSearch({ q: q, maxResults: maxResults }))
      return { data: searchResult.data, raw: searchResult }
    } catch (error) {
      thunkAPI.rejectWithValue({ error })
    }
  }
)

export const startDownloadMusicFromYoutube = createAsyncThunk(
  'youtube/download',
  async ({ title, id }: { title: string, id: string }, thunkAPI) => {
    const url = 'https://youtube-mp36.p.rapidapi.com/dl'
    const options = {
      method: 'GET',
      params: { id },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
      }
    };

    try {
      const generatedMp3: AxiosResponse<APIResponse.YoutubeToMp3> = await axios.get(url, options)
      const downloadResumable = await startDownloadFromUrl({ url: generatedMp3.data.link, title })
      // if (downloadedAt) await shareAsync(downloadedAt)
      return { generatedMp3, downloadResumable }
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
    updateDownloadProgress(state, action) {
      state.downloadProgress = action.payload
    },
    updateCurrentDownloadObject(state, action: PayloadAction<Store.YoutubeCurrentDownloadObject>) {
      state.currentDownloadObject = action.payload
    }
  },
  extraReducers(builder) {
    // Search Music From Youtube
    builder.addCase(searchMusicFromYoutube.pending, (state, action) => {
      state.loading.searchMusicFromYoutube = true;
    }),
      builder.addCase(searchMusicFromYoutube.fulfilled, (state, action) => {
        state.loading.searchMusicFromYoutube = false;
        if (action.payload) {
          state.searchResults = action.payload.data.items
        }
      }),
      builder.addCase(searchMusicFromYoutube.rejected, (state, action) => {
        state.loading.searchMusicFromYoutube = false;
        state.errors.searchMusicFromYoutube = action.error;
      }),

      // Start download from youtube
      builder.addCase(startDownloadMusicFromYoutube.fulfilled, (state, action) => {
        if (action.payload && action.payload.downloadResumable) {
          state.currentDownloadResumable = action.payload.downloadResumable
        }
      })
    builder.addCase(startDownloadMusicFromYoutube.rejected, (state, action) => {
      state.errors.startDownloadMusicFromYoutube = action.error
    })
  }
})

// export const { updateMediaPermisson } = youtubeSlice.actions

const startDownloadFromUrl = async ({ title, url }: { title: string, url: string }) => {
  const downloadResumable = FileSystem.createDownloadResumable(
    url,
    FileSystem.documentDirectory + `${title}.mp3`,
    {},
    // (downloadProgress) => {
    //   const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
    //   console.log("Download progress", progress)
    // }
    (downloadProgress) => {
      const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
      document.dispatchEvent(new CustomEvent('onDownloadProgress', { detail: progress }))
    }
  );

  try {
    downloadResumable.downloadAsync();
    // console.log('Finished downloading to ', JSON.stringify(data?.uri));
    // if (data) {
    //   await MediaLibrary.createAssetAsync(data.uri)
    // }
    // if (data) await saveFile(data.uri, title, data.headers["Content-Type"]);
    return downloadResumable;
  } catch (e) {
    console.error(e);
  }
}

async function saveFile(uri: string, filename: string, mimetype: string) {
  if (Platform.OS === "android") {
    const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

    if (permissions.granted) {
      const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });

      await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filename, mimetype)
        .then(async (uri) => {
          await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
        })
        .catch(e => console.log(e));
    } else {
      shareAsync(uri);
    }
  } else {
    shareAsync(uri);
  }
}

export const { updateDownloadProgress, updateCurrentDownloadObject } = youtubeSlice.actions
export default youtubeSlice.reducer