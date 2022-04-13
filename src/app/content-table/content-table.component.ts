import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css'],
})
export class ContentTableComponent implements OnInit {
  constructor() {}

  @Input() posts: any[];
  @Output() pickedUser: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {}

  public onUserClicked(firstName: string) {
    this.pickedUser.emit(firstName);
  }
}
