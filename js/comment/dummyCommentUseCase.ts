import { Observable } from "rxjs"
import { CommentUseCase } from "./commentUseCase";
import { Comment } from "./comment";
import { injectable } from "inversify";

@injectable()
export class DummyCommentUseCase implements CommentUseCase {
    fetchComments(): Promise<Comment[]> {
        return new Promise((resolve) => {
            const dummyDataList = Observable.range(1, 100)
                .map((i) => {
                    return new Comment(i, `author ${i}`, `text ${i}`, new Date().toString())
                })
                .toArray()
                .subscribe(comments => resolve(comments))
        })
    }
}