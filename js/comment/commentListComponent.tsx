import * as React from "react"
import { Subject, Subscription } from "rxjs"
import { Comment } from "./comment"
import { diContainer } from "../di/inversify.config"
import { TYPES } from "../di/types"
import { CommentListViewModel } from "./commentListViewModel"

export interface CommentsProps {
    comments?: Array<Comment>
}

export interface CommentsState {
    comments: Array<Comment>
}

const style = {
    commentList: {
        ul: {

        },
        li: {

        },
        row: {
            author: {

            },
            createAt: {
                "marginLeft": "8px",
                "color": "dimgray",
                "fontSize": "0.9em",
            },
            message: {

            }
        },
    }
}

export default class CommentListComponent extends React.Component<CommentsProps, CommentsState> {
    private viewModel: CommentListViewModel
    private subscription: Subscription

    constructor(props: CommentsProps) {
        super(props)
        this.viewModel = diContainer.get(TYPES.comment.listViewModel)
        this.subscription = new Subscription()
    }

    componentDidMount() {
        this.setState({comments: []} as CommentsState)

        this.viewModel.getCommentObservable().subscribe(
            (value) => {
                this.setState({ comments: value } as CommentsState)
            },
            (error) => {
                console.log(error);
            }
        ).add(this.subscription)
        this.viewModel.fetchComment()
    }

    componentWillUnmount() {
        this.subscription.unsubscribe()
    }

    render() {
        return (
            <div className="commentList">
                <ul>
                    { this.renderRow() }
                </ul>
                <button onClick={ e => this.viewModel.fetchComment() }>reflesh</button>
            </div>
        )
    }

    renderRow() {
        if (!this.state) {
            return
        }

        return this.state.comments.map((comment) => {
            return (
                <li className="commentList__row" key={ comment.id }>
                    <p className="commentList__row__author">
                    { comment.author }
                        <span className="commentList__row__createdAt" style={ style.commentList.row.createAt }>
                            { comment.createAt }
                        </span>
                    </p>
                    <p className="commentList__row__message">{ comment.text }</p>
                </li>
            )
        })
    }
}
