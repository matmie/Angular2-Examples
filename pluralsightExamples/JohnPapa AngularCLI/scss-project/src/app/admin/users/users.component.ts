import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scss-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users : any[];
  hasPermission : boolean = true;
  constructor() { }

  ngOnInit() {
      if(this.hasPermission){
        this.getUsers().then(users => this.users = users).catch(e => console.log(e.message));
      } else{
        this.users = [];
      }
  }

  async getUsers(){
    return [
        {name: "Mateusz", email: "mat@mie.com"},
        {name: "Mateusz2", email: "mat2@mie.com"},
        {name: "Mateusz3", email: "mat3@mie.com"}
    ]
  }

}
