const TYPES = {
    apiClient: Symbol.for("apiClient"),

    comment: {
        repository: Symbol.for("commentRepository"),
        useCase: Symbol.for("commentUseCase"),
        listViewModel: Symbol.for("commentViewModel"),
    },
}

export { TYPES }