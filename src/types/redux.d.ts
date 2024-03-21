namespace Store {
  /**
   * Permission
   */
  type Permission = {
    media: PermissionResponse;
  };
  type PermissionResponse = {
    canAskAgain: boolean;
    expires: "never" | number;
    granted: boolean;
    status: "denied" | "granted" | "undetermined";
  };

  /**
   * Musics
   */
  type Music = {
    musics: Array<import("expo-media-library").Asset>;
    currentMusic: null | CurrentMusic;
    currentPositionInMillseconds: number;
    loading: {
      getMusicFromDevice: boolean;
      playMusic: boolean;
      pauseMusic: boolean;
      unpauseMusic: boolean;
      replayMusic: boolean;
      startMusicFromPosition: boolean;
      moveToMusic: boolean;
    };
    error: {
      getMusicFromDevice: unknown;
      playMusic: unkown;
      pauseMusic: unknown;
      unpauseMusic: unknown;
      replayMusic: unknown;
      startMusicFromPosition: unknown;
      moveToMusic: unknown;
    };
  };

  // Under development
  type CurrentMusic = {
    asset: import("expo-media-library").Asset;
    playbackObject: any;
    status: MusicStatus;
  };

  type MusicStatus = "playing" | "paused" | "finished" | "buffering" | "loaded";

  type Youtube = {
    searchResults: Array<APIResponse.YoutubeAPIResponseVideoData>;
    downloadProgress: number;
    currentDownloadResumable: null | import("expo-file-system").DownloadResumable;
    currentDownloadObject: YoutubeCurrentDownloadObject;
    loading: {
      searchMusicFromYoutube: boolean;
    };
    errors: {
      searchMusicFromYoutube: unknown;
      startDownloadMusicFromYoutube: unknown;
    };
  };
  type YoutubeCurrentDownloadObject = null | {
    details: {
      id: string;
      title: string;
      initialDownloadLocation: string;
    };
    downloadResumable: import("expo-file-system").DownloadResumable;
  };

  // Album
  type Album = {
    albums: Array;
  };
}
