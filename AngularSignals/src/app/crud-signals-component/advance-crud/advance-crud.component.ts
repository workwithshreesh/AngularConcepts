import { Component, effect, inject } from '@angular/core';
import { PostService } from './post.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataSharingService } from '../data-sharing.service';
import { Router, RouterLink } from '@angular/router';
import { Post } from './Post.modal';

@Component({
  selector: 'app-advance-crud',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './advance-crud.component.html',
  styleUrl: './advance-crud.component.css'
})
export class AdvanceCrudComponent {

  private postService = inject(PostService);
  private dataService = inject(DataSharingService);
  private router = inject(Router);

  posts = this.postService.posts;
  searchInput = new FormControl('');

  constructor(){
    this.searchInput.valueChanges.subscribe(value => {
      this.postService.searchTerm.set(value || '');
    });
  }


  deletePost(id:any){
    this.postService.deletePost(id);
  }

  // update signals
  onUpdate(post:Post){
    this.dataService.selectedPost.set(post)
    this.router.navigate(['signal-form']);
  }




}
