import { CommonModule, NgClass } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { PostComponent } from "src/app/container/post/post.component";
import { PostsComponent } from "./posts.component";
import { ContactComponent } from "../contact/contact.component";
import { PostEditComponent } from "../post-edit/post-edit.component";
import { StoreModule } from "@ngrx/store";
import { postReducer } from "../redux1/posts.reducer";
import { Post_State_Name } from "../redux1/posts.selector";

const routes: Routes = [
    {
        path: '', component: PostsComponent,
        children: [
            { path: 'add', component: ContactComponent },
            { path: 'edit/:id', component: PostEditComponent }

        ]
    },
]

@NgModule({
    declarations: [
        PostsComponent,
        ContactComponent,
        PostEditComponent
    ],
    imports: [

        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        StoreModule.forFeature(Post_State_Name, postReducer)

    ]
})

export class PostModule {

}