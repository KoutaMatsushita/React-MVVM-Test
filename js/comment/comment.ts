import moment from "moment"

export class Comment {
    constructor(
        private _id: number,
        private _author: string,
        private _text: string,
        private _created_at: string
    ){}

    get id(): number {
        return this._id
    }

    get author(): string {
        return this._author
    }

    get text(): string {
        return this._text
    }

    get createAt(): string {
        return moment(this._created_at).format("YYYY/MM/DD HH:mm:ss")
    }
}