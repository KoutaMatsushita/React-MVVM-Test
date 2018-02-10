import { inject, injectable } from "inversify"
import { TYPES } from "../di/types"
import { Comment } from "./comment";
import { BehaviorSubject, Subject } from "rxjs"
import { CommentUseCase } from "./commentUseCase";
import { CommentListViewModel } from "./commentListViewModel";

@injectable()
export class CommentListViewModelImpl implements CommentListViewModel {
    private _commentObservable: BehaviorSubject<Array<Comment>>
    
    constructor(
        @inject(TYPES.comment.useCase) private useCase: CommentUseCase
    ) {
        this._commentObservable = new BehaviorSubject<Array<Comment>>([])
    }

    fetchComment() {
       this.useCase.fetchComments().then((comments) => {           
           this._commentObservable.next(comments)
       }, (error) =>{
            this._commentObservable.error(error)
       })
    }

    getCommentObservable(): Subject<Array<Comment>> {
        return this._commentObservable
    }
}