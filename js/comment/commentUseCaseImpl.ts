import { inject, injectable } from "inversify";
import { TYPES } from "../di/types";
import { CommentRepository } from "./commentRepository";
import { CommentUseCase } from "./commentUseCase";
import { Comment } from "./comment"

@injectable()
export class CommentUseCaseImpl implements CommentUseCase {
    constructor(
        @inject(TYPES.comment.repository) private repository: CommentRepository
    ) {}

    fetchComments(): Promise<Array<Comment>> {
        return this.repository.fetchComment()
    }
}