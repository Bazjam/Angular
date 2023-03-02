import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  webDevelopment = 300;
  design = 400;
  Integration = 250;
  training = 220;
  result = 0;


  classGreen = 'green';
  classNone = '';

  status: boolean = false;

  clickEvent(price:number) {
    this.result += this.status ? -price : price;
    
    // this.status = !this.status;
    // this.result = this.webDevelopment;
  }

  st1: boolean = false;
  st2: boolean = false;
  st3: boolean = false;
  st4: boolean = false;
  clickEv1() {
    this.st1 = !this.st1;
  }
  clickEv2() {
    this.st2 = !this.st2;
  }
  clickEv3() {
    this.st3 = !this.st3;
  }
  clickEv4() {
    this.st4 = !this.st4;
  }


  // toggleCards(num:number) {
  //   this.result -=num
  // }
}
