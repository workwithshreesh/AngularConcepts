import { Component, inject } from '@angular/core';
import { PostService } from './post.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advance-crud',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './advance-crud.component.html',
  styleUrl: './advance-crud.component.css'
})
export class AdvanceCrudComponent {

  private postService = inject(PostService);
  posts = this.postService.posts;
  searchInput = new FormControl('');

  constructor(){
    this.searchInput.valueChanges.subscribe(value => {
      this.postService.searchTerm.set(value || '');
    });
  }


  deletePost(id:number){
    this.postService.deletePost(id);
  }

  // update signals
  onUpdate(){

  }


  // delete signals
  onDelete(){

  }

}
