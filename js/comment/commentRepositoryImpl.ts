import { TYPES } from "../di/types"
import { inject, injectable } from "inversify"
import { ApiClient } from "../api/api_client_interface"
import { diContainer } from "../di/inversify.config";
import { CommentRepository } from "./commentRepository";
import { Comment } from "./comment";

@injectable()
export class CommentRepositoryImpl implements CommentRepository {
    private apiClient: ApiClient

    constructor() {
        this.apiClient = diContainer.get(TYPES.apiClient)
    }

    fetchComment(): Promise<Array<Comment>> {
        return this.apiClient.getComment().then((comments) => {
            const array = comments as Array<any>
            return array.map((comment) => {
                return new Comment(comment.id, comment.author, comment.text, comment.created_at)
            })
        })
    }
}