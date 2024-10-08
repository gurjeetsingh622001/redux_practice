import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { UserComponent } from './container/user/user.component';
import { PostComponent } from './container/post/post.component';
import { CounterComponent } from './leela/counter/counter.component';
import { HomeComponent } from './leela/home/home.component';
import { NavComponent } from './leela/nav/nav.component';
import { PostsComponent } from './leela/posts/posts.component';
import { ContactComponent } from './leela/contact/contact.component';
import { PostEditComponent } from './leela/post-edit/post-edit.component';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  // { path: '', redirectTo: 'dash/user', pathMatch: 'full' },
  {
    path: 'dash', component: DashboardComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'post', component: PostComponent }
    ]
  },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'counter', component: CounterComponent }
    ]
  },
  {
    path: '', component: NavComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'counter', loadChildren: () => import('./leela/counter/counter.module').then(m => m.CounterModule) },
      { path: 'posts', loadChildren: () => import('./leela/posts/post.module').then(m => m.PostModule) },
      { path: 'auth', loadChildren: () => import('./leela/auth/auth.module').then(m => m.AuthModule) },
      { path: 'create-customer', component: CreateCustomerComponent },
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'edit-customer/:id', component: EditCustomerComponent },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('app routing module')
  }
}
