import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postList: Post[] = [
    { id: '1', titre: 'Premier post', contenu: 'détails premier post' },
    { id: '2', titre: 'Deuxième post', contenu: 'détails deuxième post' },
    { id: '3', titre: 'Troisième post', contenu: 'détails troisième post' },
  ];

  getPosts(): Observable<Post[]> {
    return of([...this.postList]);
  }

  getPostById(id: string): Observable<Post | undefined> {
    return of(this.postList.find((post) => post.id === id));
  }

  createPost(post: Post): Observable<Post[]> {
    this.postList = [...this.postList, post];
    return this.getPosts();
  }

  updatePost(updatedPost: Post): Observable<Post[]> {
    this.postList = this.postList.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    return this.getPosts();
  }

  deletePost(id: string): Observable<Post[]> {
    this.postList = this.postList.filter((post) => post.id !== id);
    return this.getPosts();
  }
}
