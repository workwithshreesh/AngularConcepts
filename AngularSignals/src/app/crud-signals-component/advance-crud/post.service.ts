import { computed, effect, Injectable, signal } from '@angular/core';
import { Post } from './Post.modal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsSignal = signal<Post[]>([]);
  private baseUrl = "http://localhost:3000/posts";

  // reactive search term
  searchTerm = signal('');

  constructor(private http: HttpClient) {

    // fetch the post
    this.fetchPosts();

    // Effect to log search term 
    effect(() => {
      const term = this.searchTerm();
      if(term){
        console.log("Search term", term);
      }
    });
   }


  //  public computed post list
  posts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.postsSignal().filter(post => {
      return post.title.toLowerCase().includes(term)
    })
  });


  // fetch post
  fetchPosts() {
    this.http.get<Post[]>(this.baseUrl).subscribe( posts => this.postsSignal.set(posts))
  }


  // add a post
  addPost(post:Post){
    this.http.post<Post>(this.baseUrl,post).subscribe(newPost => {
      this.postsSignal.update(posts => [...posts, newPost]);
    });
  }



  // update post
  updatePost(post: Post){
    this.http.put<Post>(`${this.baseUrl}/${post.id}`, post).subscribe(updatePost => {
      this.postsSignal.update(posts => 
        posts.map(p => (p.id === updatePost.id ? updatePost : p ))
      );
    });
  }


  // delete post
  deletePost(id: number){
    this.http.delete(`${this.baseUrl}/${id}`).subscribe(() => {
      this.postsSignal.update(posts =>
        posts.filter(p => p.id !== id)
      );
    });
  }

}
