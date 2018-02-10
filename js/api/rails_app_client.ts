import { ApiClient } from "./api_client_interface"
import { injectable } from "inversify";

@injectable()
export class RailsAppClient implements ApiClient {
    static baseURL = "http://127.0.0.1:3000"

    getRoot(): Promise<any> {
        return this.fetchJSON()
    }

    getComment(): Promise<any> {
        return this.fetchJSON("/comments")
    }

    private fetchJSON(path?: string): Promise<any> {
        return fetch(`${RailsAppClient.baseURL}${path}`, {
            mode: "cors"
        }).then((res) => {
            return res.json()
        })
    }
 }