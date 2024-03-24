import { configureStore } from "@reduxjs/toolkit";
import permission from "./slices/permission";
import music from "./slices/music";
import youtube from "./slices/youtube";
import album from "./slices/album";
// ...

export const store = configureStore({
  reducer: {
    permission: permission,
    music: music,
    youtube: youtube,
    album: album,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
