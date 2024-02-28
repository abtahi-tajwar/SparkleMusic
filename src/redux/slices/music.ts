import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as MediaLibrary from "expo-media-library";
import { PagedInfo, Asset } from "expo-media-library";
import { Audio } from "expo-av";
import { Sound, SoundObject } from "expo-av/build/Audio";
import { RootState } from "../store";
import { AVPlaybackStatus, Playback } from "expo-av/build/AV";

const MusicPlaceholder = require("../../../assets/music-placeholder.jpg");

// Define the initial state using that type
const initialState: Store.Music = {
  musics: [],
  currentMusic: null,
  currentPositionInMillseconds: 0,
  loading: {
    getMusicFromDevice: false,
    playMusic: false,
    pauseMusic: false,
    unpauseMusic: false,
    replayMusic: false,
    startMusicFromPosition: false,
  },
  error: {
    getMusicFromDevice: null,
    playMusic: null,
    pauseMusic: null,
    unpauseMusic: null,
    replayMusic: null,
    startMusicFromPosition: null,
  },
};

export const getMusicsFromDevice = createAsyncThunk(
  "music/get",
  async (_, thunkAPI) => {
    try {
      const response = await MediaLibrary.getAssetsAsync({
        mediaType: "audio",
      });

      return response;
    } catch (error) {
      thunkAPI.rejectWithValue({ error });
    }
  }
);

export const playMusic = createAsyncThunk(
  "music/play",
  async (_id: string, thunkAPI) => {
    const { music } = thunkAPI.getState() as RootState;
    const selectedMusic = music.musics.find((m) => m.id === _id);
    const currentMusic = music.currentMusic;
    if (currentMusic) {
      await currentMusic.playbackObject.stopAsync();
      await currentMusic.playbackObject.unloadAsync();
    }
    if (!selectedMusic) {
      thunkAPI.rejectWithValue({ error: "Invalid music!" });
    }
    const { id, uri, filename } = selectedMusic as Asset;
    try {
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      const { sound } = await Audio.Sound.createAsync({
        uri,
      });
      sound.playAsync();
      // sound.setOnPlaybackStatusUpdate(_playbackStatusUpdate)

      return {
        asset: selectedMusic,
        playbackObject: sound,
        status: "playing" as Store.MusicStatus,
      };
    } catch (error) {
      thunkAPI.rejectWithValue({ error });
    }
  }
);
export const unpauseMusic = createAsyncThunk(
  "music/unpause",
  async (_, thunkAPI) => {
    const { music } = thunkAPI.getState() as RootState;
    const currentMusic = music.currentMusic;

    if (currentMusic) {
      const { playbackObject } = currentMusic;
      try {
        await playbackObject.playAsync();
        return {
          ...currentMusic,
          status: "playing" as Store.MusicStatus,
        };
      } catch (error) {}
    } else {
      return thunkAPI.rejectWithValue({
        error:
          "No music is currently being played, unble to do unpause operation",
      });
    }
  }
);

export const replayMusic = createAsyncThunk(
  "music/replay",
  async (_, thunkAPI) => {
    const { music } = thunkAPI.getState() as RootState;
    const currentMusic = music.currentMusic;

    if (currentMusic) {
      const { playbackObject } = currentMusic;
      try {
        await playbackObject.playFromPositionAsync(0);
        return {
          ...currentMusic,
          status: "playing" as Store.MusicStatus,
        };
      } catch (error) {}
    } else {
      return thunkAPI.rejectWithValue({
        error:
          "No music is currently being played, unble to do unpause operation",
      });
    }
  }
);

export const startMusicFromPosition = createAsyncThunk(
  "music/seek",
  async (milliseconds: number, thunkAPI) => {
    const { music } = thunkAPI.getState() as RootState;
    const currentMusic = music.currentMusic;

    if (currentMusic) {
      const { playbackObject } = currentMusic;
      try {
        await playbackObject.playFromPositionAsync(milliseconds);
        return {
          ...currentMusic,
          status: "playing" as Store.MusicStatus,
        };
      } catch (error) {}
    } else {
      return thunkAPI.rejectWithValue({
        error:
          "No music is currently being played, unble to do unpause operation",
      });
    }
  }
);

export const pauseMusic = createAsyncThunk(
  "music/pause",
  async (_, thunkAPI) => {
    const { music } = thunkAPI.getState() as RootState;
    const currentMusic = music.currentMusic;
    if (currentMusic) {
      const { playbackObject } = currentMusic;
      try {
        playbackObject.pauseAsync();
        return {
          ...currentMusic,
          status: "paused" as Store.MusicStatus,
        };
      } catch (error) {
        thunkAPI.rejectWithValue({ error });
      }
    } else {
      thunkAPI.rejectWithValue({
        error: "Currently no music is being play, unable to do pause operation",
      });
    }
  }
);
export const permissionSlice = createSlice({
  name: "permission",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateMusics(state, action) {
      state.musics = action.payload;
    },
    setCurrentMusic(state, action) {
      state.currentMusic = action.payload;
    },
    updateCurrentMusicStatus(
      state,
      { payload }: PayloadAction<Store.MusicStatus>
    ) {
      if (state.currentMusic) {
        state.currentMusic.status = payload;
      }
    },
    updateCurrentMusicPosition(state, { payload }: PayloadAction<number>) {
      if (state.currentMusic) {
        state.currentPositionInMillseconds = payload;
      }
    },
  },
  extraReducers(builder) {
    // Get Music
    builder.addCase(getMusicsFromDevice.pending, (state, action) => {
      state.loading.getMusicFromDevice = true;
    });
    builder.addCase(getMusicsFromDevice.fulfilled, (state, action) => {
      state.loading.getMusicFromDevice = false;
      if (action.payload) {
        state.musics = action.payload.assets;
      }
    });
    builder.addCase(getMusicsFromDevice.rejected, (state, action) => {
      state.error.getMusicFromDevice = action.error;
    });

    // Play Music
    builder.addCase(playMusic.pending, (state, action) => {
      state.loading.playMusic = true;
    });
    builder.addCase(playMusic.fulfilled, (state, action) => {
      state.loading.playMusic = false;
      if (action.payload) {
        const { asset, playbackObject, status } = action.payload;
        if (asset && playbackObject && status) {
          state.currentMusic = {
            asset: asset,
            playbackObject: playbackObject,
            status: status,
          };
        }
      }
    });
    builder.addCase(playMusic.rejected, (state, action) => {
      state.error.playMusic = action.error;
    });

    // Pause music
    builder.addCase(pauseMusic.pending, (state, action) => {
      state.loading.playMusic = true;
    });
    builder.addCase(pauseMusic.fulfilled, (state, action) => {
      state.loading.playMusic = false;
      if (state.currentMusic && action.payload) {
        state.currentMusic.status = action.payload.status;
      }
    });
    builder.addCase(pauseMusic.rejected, (state, action) => {
      state.error.playMusic = action.error;
    });

    // Unpause music
    builder.addCase(unpauseMusic.pending, (state, action) => {
      state.loading.unpauseMusic = true;
    });
    builder.addCase(unpauseMusic.fulfilled, (state, action) => {
      state.loading.unpauseMusic = false;
      if (state.currentMusic && action.payload) {
        state.currentMusic.status = action.payload.status;
      }
    });
    builder.addCase(unpauseMusic.rejected, (state, action) => {
      state.error.unpauseMusic = action.error;
    });

    // Replay music
    builder.addCase(replayMusic.pending, (state, action) => {
      state.loading.replayMusic = true;
    });
    builder.addCase(replayMusic.fulfilled, (state, action) => {
      state.loading.replayMusic = false;
      if (state.currentMusic && action.payload) {
        state.currentMusic.status = action.payload.status;
      }
    });
    builder.addCase(replayMusic.rejected, (state, action) => {
      state.error.replayMusic = action.error;
    });

    // Start music from specific position music
    builder.addCase(startMusicFromPosition.pending, (state, action) => {
      state.loading.startMusicFromPosition = true;
    });
    builder.addCase(startMusicFromPosition.fulfilled, (state, action) => {
      state.loading.startMusicFromPosition = false;
      if (state.currentMusic && action.payload) {
        state.currentMusic.status = action.payload.status;
      }
    });
    builder.addCase(startMusicFromPosition.rejected, (state, action) => {
      state.error.startMusicFromPosition = action.error;
    });
  },
});

export const {
  updateMusics,
  setCurrentMusic,
  updateCurrentMusicStatus,
  updateCurrentMusicPosition,
} = permissionSlice.actions;

export default permissionSlice.reducer;
