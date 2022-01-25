import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/interfaces/postsinterface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-singlpost',
  templateUrl: './singlpost.component.html',
  styleUrls: ['./singlpost.component.css']
})
export class SinglpostComponent implements OnInit {
post:Posts={}
  constructor(private postservice:PostsService,private rout:ActivatedRoute) { }
  id:string = this.rout.snapshot.params['id']
  getSinglPost(){
    this.postservice.getSinglePost(this.id).subscribe({
      next:(res:any)=>{
       console.log(res)
       this.post = res
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
  }

  ngOnInit(): void {
    this.getSinglPost()
  }

}
