namespace Utils {
    type Key<T> = T & { key : string }
    type Id<T> = T & { id: string }
}