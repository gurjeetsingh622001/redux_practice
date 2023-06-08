import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Action, Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LOGIN_START, loginStart, loginSuccess, signupStart, signupSuccess } from "./state/auth.action";
import { exhaustMap, map, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { SET_ERROR_MESSAGE, setErrorMessage, setLoadingSpinner } from "../redux1/shared/shared.action";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthEffects {

    constructor(private actions$: Actions, private authService: AuthService, private store: Store, private router: Router) { }

    login$ = createEffect(() => {
        // console.log('asashbjsbzhjb')
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService
                    .login(action.email, action.password)
                    .pipe(map((data) => {
                        console.log(data)
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        this.store.dispatch(setErrorMessage({ message: '' }))
                        const user = this.authService.formatUser(data)
                        console.log(user)
                        return loginSuccess({ user });
                    }),
                        catchError((errResp) => {
                            console.log(errResp)
                            this.store.dispatch(setLoadingSpinner({ status: false }))
                            const errorMessage = this.authService.getErrorMessage(errResp.error)
                            // console.log(errorMessage)
                            return of(setErrorMessage({ message: errorMessage }));
                        })
                    )
            })
        );
    });

    loginRedirect$ = createEffect(() => {
        return this.actions$.pipe(ofType(loginSuccess),
            tap((action) => {
                this.router.navigate(['/posts/add'])
            })
        )
    }, { dispatch: false })


    signUp$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupStart),
            exhaustMap((action) => {
                return this.authService.signUp(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        const user = this.authService.formatUser(data);
                        return signupSuccess({ user });
                    }),
                    catchError((errResp) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        const errorMessage = this.authService.getErrorMessage(
                            errResp.error.error.message
                        );
                        return of(setErrorMessage({ message: errorMessage }));
                    })
                );
            })
        );
    });

}   