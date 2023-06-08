import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PostComponent } from './container/post/post.component';
import { UserComponent } from './container/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './redux/reducers';
import { CounterComponent } from './leela/counter/counter.component';
import { CounterButtonComponent } from './leela/counter-button/counter-button.component';
import { CounterOutputComponent } from './leela/counter-output/counter-output.component';
import { counterReducer } from './leela/state/counter.reducer';
import { CustomCounterInputComponent } from './leela/custom-counter-input/custom-counter-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './leela/home/home.component';
import { ContactComponent } from './leela/contact/contact.component';
import { NavComponent } from './leela/nav/nav.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { postReducer } from './leela/redux1/posts.reducer';
import { appReducer } from './leela/redux1/app.state';
import { PostsComponent } from './leela/posts/posts.component';
import { PostEditComponent } from './leela/post-edit/post-edit.component';
import { LoginComponent } from './leela/login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { SpinnerComponent } from './leela/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LayoutComponent,
    PostComponent,
    UserComponent,
    UserCardComponent,
    UserListComponent,
    // CounterComponent,
    // CounterButtonComponent,
    // CounterOutputComponent,
    // CustomCounterInputComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    SpinnerComponent,
    // PostsComponent,
    // ContactComponent,
    // PostEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    // StoreModule.forRoot({}),commented at 28 video,
    // StoreModule.forRoot(appReducer),
    // StoreModule.forRoot({ counter: counterReducer,posts :postReducer }),
    // StoreModule.forRoot(rootReducer ),
    FormsModule,
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    ReactiveFormsModule,
    EffectsModule.forRoot([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    console.log('app module')
  }

}
