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
        items: Array<{
            kind: string
            etag: string
            id: {
                kind: string
                videoId: string
            }
        }>
    }
}