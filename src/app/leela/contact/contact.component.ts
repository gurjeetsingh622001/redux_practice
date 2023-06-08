import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../redux1/post.state';
import { Store } from '@ngrx/store';
import { AppState } from '../redux1/app.state';
import { addPost } from '../redux1/post.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  postForm: FormGroup;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  showDescriptionErrors(): string | null {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm?.errors?.['required']) {
        return 'Description is required';
      }

      if (descriptionForm?.errors?.['minlength']) {
        return 'Description should be of minimum 10 characters length';
      }
      else {
        return null
      }
    }
    else {
      return null
    }
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }

    // console.log(this.postForm.value);

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }

    // this.store.dispatch(addPost())
    this.store.dispatch(addPost({ post }))
    // this.router.navigateByUrl('nav/posts')
  }

  get get() {
    return this.postForm.controls
  }

}
