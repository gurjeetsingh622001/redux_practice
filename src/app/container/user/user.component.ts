import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { User } from 'src/app/models/model';
import { UserListRequestAction, UserListSuccessAction } from 'src/app/redux/actions/user-action';
import { RootReducerState, getUserLoaded, getUserLoading, getUsers } from 'src/app/redux/reducers';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private apiService: ApiService, private store: Store<RootReducerState>) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  users: User[] = []

  loadUsers() {
    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoaded);
    const getUserData = this.store.select(getUsers);

    combineLatest([loaded$, loading$]).subscribe(data => {
      if (!data[0] && !data[1]) {
        this.store.dispatch(new UserListRequestAction())

        this.apiService.getUsers().subscribe(
          {
            next: (res: any) => {
              // console.log(res)
              // this.users = res
              this.store.dispatch(new UserListSuccessAction({ data: res }))
            },
            error: (err: any) => {
              console.log(err)
            }
          }
        )
      }
    })



    this.store.select(getUsers).subscribe(data => {
      console.log(data)
      this.users = data
    })
  }

}
