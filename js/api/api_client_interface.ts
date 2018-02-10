interface ApiClient {
    getRoot(): Promise<any>
    getComment(): Promise<any>
}

export { ApiClient }