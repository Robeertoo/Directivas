import { Component, computed, signal } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  public counter=signal(10);
  public squareCounter= computed(()=> this.counter() * this.counter());

  increseBy(value:number){
    //this.counter.set(this.counter()+ value);
    this.counter.update(c=> c + value);
  }

}
