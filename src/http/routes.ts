export const apis : ApisType = {
    youtubeSearch: ({ q, maxResults = 5 }) => `/v3/search?q=${q}&maxResults=${maxResults}&part=snippet`,
    getYoutubeVideosByIds : ({ idsString }) => `/v3/videos?id=${idsString}`
}

type ApisType = {
    youtubeSearch: (data : { q: string, maxResults?: number }) => string,
    getYoutubeVideosByIds: (data : { idsString: string }) => string
}