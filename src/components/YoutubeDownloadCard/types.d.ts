namespace PropTypes {
    type YoutubeDownloadCard = {
        id: string,
        thumbnail: string,
        title: string,
        description: string,
        onDownload: ({ title, id } : { id: string, title: string }) => void
    }
}