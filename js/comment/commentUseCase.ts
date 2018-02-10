import { Comment } from "../comment/comment"

export interface CommentUseCase {
    fetchComments(): Promise<Array<Comment>>
}