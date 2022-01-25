import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userinterface';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allUsers: Users[] =[]
  constructor(private userservice:UserserviceService) { }
  getData(){
    this.allUsers=this.userservice.getUsers()
  }

  ngOnInit(): void {
    this.getData()
  }

}
