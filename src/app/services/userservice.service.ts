import { Injectable } from '@angular/core';
import { Users } from '../interfaces/userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  allUsers:Users[]=[
    {id:1,name:'ali',age:34},
    {id:2,name:'omar',age:24},
    {id:3,name:'osama',age:44}

  ]
  getUsers(){
    return this.allUsers
  }


  constructor() { }
}
