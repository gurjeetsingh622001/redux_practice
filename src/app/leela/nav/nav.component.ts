import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../auth/state/auth.state';
import { Observable } from 'rxjs';
import { isAuthenticated } from '../auth/state/auth.selector';
import { AppState } from '../redux1/app.state';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

  }



}
