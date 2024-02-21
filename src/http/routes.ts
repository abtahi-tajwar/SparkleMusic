export const apis = {
    youtubeSearch: ({ q } : { q : string}) => `/v3/search?q=${q}`
}