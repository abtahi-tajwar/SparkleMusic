import * as MediaLibrary from "expo-media-library";
import React, { useEffect } from "react";
import { updateMediaPermisson } from "../redux/slices/permission";
import { useAppDispatch } from "../redux/hooks";
import { getMusicsFromDevice } from "../redux/slices/music";
import { getAlbums } from "../redux/slices/album";
import { LogBox } from "react-native";
import { Asset } from "expo-media-library";

const useInitialize = () => {
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const dispatch = useAppDispatch();

  const initializePermission = (_permissionResponse: Store.PermissionResponse) => {
    dispatch(updateMediaPermisson(_permissionResponse));
  };

  const askPermission = (_permissionResponse: Store.PermissionResponse) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!_permissionResponse.granted && _permissionResponse.canAskAgain) {
          const data = await requestPermission();
          resolve(data);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const initializeMusic = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const musics = await dispatch(getMusicsFromDevice());
        resolve(musics)
      } catch (error) {
        reject({ error })
      }
    })
  };

  const initializeAlbum = async (fetchedMusics : Array<Asset>) => {
    const albums = await dispatch(getAlbums(fetchedMusics)).unwrap();
  };

  useEffect(() => {
    LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
  }, []);
  useEffect(() => {
    if (permissionResponse) {
      if (permissionResponse.granted) {
        initializePermission(permissionResponse);
        initializeMusic().then((musics : any) => {
          const fetchedMusics = musics.payload.fetchedMusicResponse.assets
          initializeAlbum(fetchedMusics);
        })
      } else {
        askPermission(permissionResponse).then((res) => {
          initializePermission(res as Store.PermissionResponse);
        });
      }
    }
  }, [permissionResponse]);

  return;
};

export default useInitialize;
