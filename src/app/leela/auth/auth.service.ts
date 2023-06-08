import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthResposeData } from "src/app/models/model";
import { User } from "src/app/models/user.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<AuthResposeData> {

        return this.http.post<AuthResposeData>("http://localhost:5000/user/userlogin", { email, password })

    }

    formatUser(data: AuthResposeData) {
        const user = new User(data.email, data.token)
        return user;
    }

    getErrorMessage(message: string) {
        // console.log(message)
        switch (message) {
            case 'Invalid email':
                return 'email required';
            case 'Invalid password':
                return 'password required ';
            default:
                return 'unknown error'
        }
    }

    signUp(email: string, password: string) {
        return this.http.post<AuthResposeData>(

            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key
            =${environment.Fire_Base_key}`,
            { email, password, returnSecureToken: true }
        );
    }

}