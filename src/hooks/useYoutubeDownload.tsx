import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCurrentDownloadObject, updateDownloadProgress } from "../redux/slices/youtube";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AxiosResponse } from "axios";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import axios from "axios";
import { getMusicsFromDevice } from "../redux/slices/music";

export default function useYoutubeDownload() {
  const dispatch = useAppDispatch();
  const currentDownloadObject = useAppSelector((state) => state.youtube.currentDownloadObject);


  const startDownloadFromUrl = ({ id, title, url }: { id: string, title: string; url: string }) => {
    return new Promise (async (resolve, reject) => {
        const initialDownloadLocation = FileSystem.documentDirectory + `${title}.mp3`
        const downloadResumable = FileSystem.createDownloadResumable(
          url,
          initialDownloadLocation,
          {},
          // (downloadProgress) => {
          //   const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
          //   console.log("Download progress", progress)
          // }
          (downloadProgress) => {
            const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
            dispatch(updateDownloadProgress(progress))
          }
        );
        
        dispatch(updateCurrentDownloadObject({
            details: { title, id, initialDownloadLocation }, 
            downloadResumable
        }))
        try {
          const data = await downloadResumable.downloadAsync();
          console.log("Finished downloading to ", JSON.stringify(data?.uri));
          if (data) {
            await MediaLibrary.createAssetAsync(data.uri);
            await FileSystem.deleteAsync(data.uri)
            dispatch(updateCurrentDownloadObject(null))
            dispatch(getMusicsFromDevice())
          }
          // if (data) await saveFile(data.uri, title, data.headers["Content-Type"]);
          resolve(downloadResumable);
        } catch (e) {
          console.error(e);
          reject({ error: e })
        }
    })


  };

  const startDownload = ({ title, id }: { id: string; title: string }) => {
    return new Promise(async (resolve, reject) => {
        if (currentDownloadObject) {
            reject({ error: "Cannot donwload multiple files at once, please finish downloading current one first!" })
        }
      const url = "https://youtube-mp36.p.rapidapi.com/dl";
      const options = {
        method: "GET",
        params: { id },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        },
      };

      try {
        const generatedMp3: AxiosResponse<APIResponse.YoutubeToMp3> = await axios.get(url, options);
        const downloadResumable = await startDownloadFromUrl({ id, url: generatedMp3.data.link, title });
        // if (downloadedAt) await shareAsync(downloadedAt)
        resolve({ generatedMp3, downloadResumable });
      } catch (error) {
        reject({ error });
      }
    });
  };

  const pauseDownload = () => {
    return new Promise(async (resolve, reject) => {
        if (!currentDownloadObject) {
            reject({ error: "No music is being downloaded, nothing to pause."})
        }
        try {
            await currentDownloadObject?.downloadResumable.pauseAsync();
            resolve({ paused: true });
          } catch (e) {
            reject({ error: e })
          }
    })
  }

  const deleteDownload = () => {
    return new Promise(async (resolve, reject) => {
        if (!currentDownloadObject) {
            reject({ error: "No music is being downloaded, nothing to delete."})
        }
        try {
            await currentDownloadObject?.downloadResumable.pauseAsync();
            if (currentDownloadObject) await FileSystem.deleteAsync(currentDownloadObject.details.initialDownloadLocation)
            dispatch(updateCurrentDownloadObject(null))
            resolve({ deleted: true });
          } catch (e) {
            reject({ error: e })
          }
    })
  }

  return { startDownload, pauseDownload, deleteDownload }
}
