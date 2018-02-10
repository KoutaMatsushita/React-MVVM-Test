import { Comment } from "../comment/comment"

export interface CommentRepository {
    fetchComment(): Promise<Array<Comment>>
}