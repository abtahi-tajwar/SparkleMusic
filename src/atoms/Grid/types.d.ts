namespace PropTypes {
    type Grid = {
        width: number,
        cols: number,
        gap?: number,
        data: Array<T>,
        element: (T) => React.ReactNode
    }
}