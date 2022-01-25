import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url ='https://jsonplaceholder.typicode.com/todos/'
  constructor(private http:HttpClient) { }
  getPostsServices(){
    return this.http.get(this.url)
  }
    ///////get single post
    getSinglePost(id:any){
      return this.http.get(this.url + id)
    }
}

