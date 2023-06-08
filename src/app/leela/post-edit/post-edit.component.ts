import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../redux1/post.state';
import { getPostById } from '../redux1/posts.selector';
import { AppState } from '../redux1/app.state';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { addPost, updatePost } from '../redux1/post.action';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit, OnDestroy {

  post: Post | undefined;
  postForm: FormGroup;
  postSubscription: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.createForm()
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id: string | null = params.get('id');
      this.postSubscription = this.store.select(getPostById(id || ''))
        .subscribe((data) => {
          // console.log(data)
          this.post = data;
          this.createForm();
        });
    });
  }

  createForm() {
    this.postForm = new FormGroup({
      id: new FormControl(this?.post
        ?.id),
      title: new FormControl(this.post?.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post?.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }


  update() {
    // console.log(this.postForm.value.id)
    const post: Post = {
      id: this.postForm.value.id,
      title: this.postForm.value.description,
      description: this.postForm.value.description
    }
    this.store.dispatch(updatePost({ post }))
  }

}
