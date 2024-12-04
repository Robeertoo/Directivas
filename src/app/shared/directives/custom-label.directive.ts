import { Directive, ElementRef, Input, input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?:ElementRef<HTMLElement>;
  private _color:string='red';
  private _errors?:ValidationErrors  | null;

  @Input() set color(value:string){
    console.log(value);
    this._color=value;
    this.setStyle();
  };

  @Input() set errors (value:ValidationErrors | null | undefined){
    this._errors=value;
    this.setErrorMessage();
  }

  constructor(private el:ElementRef<HTMLElement>) {
    console.log('Contructor directiva');
    this.htmlElement=el;
  }
  ngOnInit(): void {
    console.log('ngOnInit directiva');
  }

  setStyle():void{
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color=this._color;
  }

  setErrorMessage():void{
    if(!this.htmlElement)return;
    if(!this._errors) {
      this.htmlElement.nativeElement.innerText='';
      return;
    }

    const error=Object.keys(this._errors);

    if(error.includes('required')){
      this.htmlElement.nativeElement.innerText='este campo es requerido';
      return;
    }
    if(error.includes('minlength')){
      const min=this._errors['minlength']['requiredLength'];
      const current=this._errors['minlength']['actualLength'];
      this.htmlElement.nativeElement.innerText='Caracteres minimos';
      return;
    }
    if(error.includes('email')){
      this.htmlElement.nativeElement.innerText='email no valido';
      return;
    }

  }
}
