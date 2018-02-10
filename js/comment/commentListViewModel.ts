import { BehaviorSubject, Subject } from "rxjs";
import { Comment } from "./comment";

export interface CommentListViewModel {
    fetchComment()
    getCommentObservable(): Subject<Array<Comment>>
}