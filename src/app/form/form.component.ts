import { Component, OnInit } from '@angular/core';

interface UserVM {
  firstName: Event;
  password: Event;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  model: any = {};

  onSubmit() {
    console.log(this.model);
  }
}
