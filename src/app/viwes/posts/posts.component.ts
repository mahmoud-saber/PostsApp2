import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/postsinterface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Posts[]=[]
  constructor(private postservice:PostsService) { }
  getPosts(){
    this.postservice.getPostsServices().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.posts=res
      },
      error:(httpeError:any)=>{
        console.log(httpeError)
      }
    })
  }
  
  ngOnInit(): void {
    this.getPosts()
  }

}
