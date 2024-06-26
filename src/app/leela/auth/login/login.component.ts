import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.action';
import { AppState } from '../../redux1/app.state';
import { setLoadingSpinner } from '../../redux1/shared/shared.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl(''),
      // email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      // password: new FormControl('', [Validators.required]),
    });

  }

  onLoginSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({ status: true }))
    setTimeout(() => {
      this.store.dispatch(loginStart({ email, password }))
    }, 3000)
  }


}
