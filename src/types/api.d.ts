namespace APIResponse {
    type YoutubeSearch = {
        kind: string
        etag: string
        nextPageToken: string
        regionCode: string
        pageInfo: {
            totalResults: number
            resultsPerPage: number
        }
        items: Array<YoutubeAPIResponseVideoData>
    }
    type YoutubeAPIResponseVideoData = {
        kind: string
        etag: string
        id: {
            kind: string
            videoId: string
        },
        snippet: {
            publishedAt: string
            channelId: string
            title: string
            description: string
            thumbnails: {
                default: { url: string, width: number, height: number }
                medium: { url: string, width: number, height: number }
                high: { url: string, width: number, height: number }
            }
            channelTitle: string
            liveBroadcastContent: string
            publishTime: string
        }
    }

    type YoutubeToMp3 = {
        link: string
        title: string
        filesize: number
        progress: number
        duration: number
        status: string
        msg: string
      }
}
