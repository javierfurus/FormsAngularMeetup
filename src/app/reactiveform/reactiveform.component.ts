import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}

  model: any = {};
  
  ngOnInit() {}

  public onSubmit() {
    console.log('submitted');
  }
}
