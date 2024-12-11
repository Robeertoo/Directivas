import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';


@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {

  private userService= inject(UsersServiceService);

  public userId =signal(1);
  public currentuser=signal<User| undefined> (undefined);
  public userWasFound=signal(true);
  public fullName=computed<string>(()=>{
    if(!this.currentuser()) return '';
    return `${this.currentuser()?.first_name} ${this.currentuser()?.last_name}`;
  });


  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id:number){
    if(id<=0) return;
    this.userId.set(id);
    this.currentuser.set(undefined);
    this.userService.getUserById(id).subscribe({
      next:(value) =>{
        this.currentuser.set(value);
        this.userWasFound.set(true);
      },
      error:()=>{
        this.userWasFound.set(false);
        this.currentuser.set(undefined);
      }
    });


  }
}
