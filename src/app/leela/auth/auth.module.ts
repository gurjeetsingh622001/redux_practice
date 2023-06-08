import { NgModule } from "@angular/core";
import { NgModel, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
// import { SignUpComponent } from '../login/login.component';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { AuthReducer } from "./state/auth.reducer";
import { AUTH_STATE_NAME, } from "./state/auth.selector";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./auth.effects";
import { SignupComponent } from './signup/signup.component';
// import { SpinnerComponent } from "../spinner/spinner.component";

const routes: Routes = [
    {
        path: '', children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent }
        ]

    }
]

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        // SpinnerComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
        EffectsModule.forFeature([AuthEffects]),
        RouterModule.forChild(routes)
    ],

})

export class AuthModule {

}