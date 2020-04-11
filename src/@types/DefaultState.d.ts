export default interface DefaultState<T> {
    loading: boolean
    error: string | null
    data: T
}
