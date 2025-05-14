import { Injectable, signal } from '@angular/core';
import { Post } from './advance-crud/Post.modal';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  // signals to hold share data
  selectedPost = signal<Post | null>(null);

  constructor() { }
  
}
