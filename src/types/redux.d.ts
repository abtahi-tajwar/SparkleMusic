namespace Store {
    /**
     * Permission
     */
    type Permission = {
        media: PermissionResponse
    }
    type PermissionResponse = {
        canAskAgain: boolean, 
        expires: ("never" | number), 
        granted: boolean, 
        status: ("denied" | "granted" | "undetermined")
    }

    /**
     * Musics
     */
    type Music = {
        musics: Array<import('expo-media-library').Asset>,
        loading: {
            getMusicFromDevice: boolean
        },
        error: {
            getMusicFromDevice: unknown
        }
    }
}