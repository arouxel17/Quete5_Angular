import { Component } from '@angular/core';
import { Form } from '../model/form';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  model: Form = new Form('', '', '', '')
  isSubmitted = false;

  constructor() {}
  
  onSubmit(): void {
    console.log(this.model);
    this.isSubmitted = true;
}
}
