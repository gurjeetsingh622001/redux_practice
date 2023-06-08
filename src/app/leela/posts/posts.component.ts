import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../redux1/app.state';
import { Observable } from 'rxjs';
import { Post } from '../redux1/post.state';
import { getPosts } from '../redux1/posts.selector';
import { deletePost } from '../redux1/post.action'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Observable<Post[]>
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts)
  }

  deletePost(postId: string | undefined) {
    this.store.dispatch(deletePost({ id: postId }))
  }

}
