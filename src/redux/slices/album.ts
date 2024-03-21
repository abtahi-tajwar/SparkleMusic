import * as MediaLibrary from "expo-media-library";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Asset, Album } from "expo-media-library";

const initialState: Store.Album = {
  albums: [],
};

export const getAlbums = createAsyncThunk("album/get", async (fetchedMusics : Array<Asset>, thunkAPI) => {
  try {
    const musicAlbumsFromMusic : Array<string> = [];
    fetchedMusics.forEach(music => {
      if (music.albumId && !musicAlbumsFromMusic.includes(music.albumId)) {
        musicAlbumsFromMusic.push(music.albumId)
      }
    })
    const response : Array<Album> = await MediaLibrary.getAlbumsAsync();
    const musicAlbums : Array<Album> = response.filter(album => musicAlbumsFromMusic.includes(album.id))
    console.log(JSON.stringify(musicAlbums))
    
    // console.log(JSON.stringify(response));
  } catch (error) {
    thunkAPI.rejectWithValue({ error });
  }
});
