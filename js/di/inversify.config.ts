import "reflect-metadata";
import { Container } from "inversify"
import { TYPES } from "./types";
import { RailsAppClient } from "../api/rails_app_client";
import { CommentRepositoryImpl } from "../comment/commentRepositoryImpl";
import { CommentUseCaseImpl } from "../comment/commentUseCaseImpl";
import { CommentListViewModelImpl } from "../comment/commentListViewModelImpl";
import { DummyCommentUseCase } from "../comment/dummyCommentUseCase";

const diContainer = new Container()
diContainer.bind(TYPES.apiClient).to(RailsAppClient)
diContainer.bind(TYPES.comment.repository).to(CommentRepositoryImpl)
// diContainer.bind(TYPES.comment.useCase).to(CommentUseCaseImpl)
diContainer.bind(TYPES.comment.useCase).to(DummyCommentUseCase)
diContainer.bind(TYPES.comment.listViewModel).to(CommentListViewModelImpl)

export { diContainer }