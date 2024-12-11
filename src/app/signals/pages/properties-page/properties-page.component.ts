import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  public counter=signal(10);
  public user=signal<User>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public fullName=computed<string>(()=>{
    if(!this.user()) return '';
    return `${this.user()?.first_name} ${this.user()?.last_name}`;
  });

  public userChangeEffect=effect(()=>{
    console.log("Vamos a ver quedo");
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  increaseBy(value:number){
    this.counter.update(current=> current + value);
  }

  onFielUpdated(field: keyof User, value:string){
    // this.user.update(current=>({
    //   ...current,
    //   [field]:value
    // }));

    this.user.update(current=>{
      switch(field){

        case 'avatar':current.avatar=value; break;
        case 'email':current.email=value;break;
        case 'first_name':current.first_name=value;break;
        case 'last_name':current.last_name=value; break;
      }

        return current;
    })


  }
}
