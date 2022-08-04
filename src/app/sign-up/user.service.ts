import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class UserService{
    private userUrl = 'http://localhost:3000/posts';

    constructor(private http :HttpClient){

    }

    public getUsers(): Observable< any>{
        return this.http.get<any> (this.userUrl)
    }
}