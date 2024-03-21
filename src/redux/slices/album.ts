import * as MediaLibrary from "expo-media-library";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState: Store.Album = {
  albums: [],
};

export const getAlbums = createAsyncThunk("album/get", async (_, thunkAPI) => {
  try {
    const response = await MediaLibrary.getAlbumsAsync();
    console.log(response);
  } catch (error) {
    thunkAPI.rejectWithValue({ error });
  }
});
