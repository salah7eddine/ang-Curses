import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) { }



  getAll(): Observable<any> {
    return this.httpClient.get(`${this.postsUrl}posts`);
  }

  create(post) {
    return this.httpClient.post(`${this.postsUrl}posts`, post);
  }

  delete(id) {
    return this.httpClient.delete(`${this.postsUrl}posts/${id}`);
  }

  update(post) {
    return this.httpClient.put(`${this.postsUrl}posts/${post.id}`, post);
  }
}
