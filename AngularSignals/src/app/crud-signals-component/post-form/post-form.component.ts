import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../advance-crud/post.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {

  private postService = inject(PostService);
  private fb = inject(FormBuilder);

  postForm!: FormGroup



  ngOnInit(): void {

    this.postForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });

  }

  patchData() {

  }


  onSubmit() {
    const post = this.postForm.value;
    if (this.postForm.valid) {
      this.postService.addPost(post as any);
      this.postForm.reset();
    }

  }

  onUpdate() {
    const post = this.postForm.value;
    if (this.postForm.valid) {
      this.postService.updatePost(post as any);
      this.postForm.reset();
    }
  }

}
