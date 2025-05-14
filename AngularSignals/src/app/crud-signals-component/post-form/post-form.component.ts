import { Component, inject, OnInit, signal } from '@angular/core';
import { PostService } from '../advance-crud/post.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataSharingService } from '../data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {

  private postService = inject(PostService);
  private dataShareService = inject(DataSharingService);
  private router = inject(Router)
  private fb = inject(FormBuilder);
  private postData = this.dataShareService.selectedPost();

  isEdit = signal(false);

  postForm!: FormGroup



  ngOnInit(): void {

    this.initForm();
    if(this.postData){
      this.isEdit.set(true);
      this.patchData();
    }
    
  }

  initForm(){
    this.postForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  patchData() {
    this.postForm.patchValue({
      id: this?.postData?.id,
      title: this.postData?.title,
      body: this.postData?.body
    });
  }


  onSubmit() {
    const post = this.postForm.value;
    if (this.postForm.valid) {
      this.postService.addPost(post as any);
      this.postForm.reset();
    }
    this.postForm.reset()
  }

  onUpdate() {
    const post = this.postForm.value;
    if (this.postForm.valid) {
      this.postService.updatePost(post as any);
      this.postForm.reset();
    }
    this.isEdit.set(false);
    this.postForm.reset();
    this.router.navigate(['signal-advcrud'])
  }

}
