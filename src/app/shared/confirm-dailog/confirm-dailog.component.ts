import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'confirm-dailog',
  templateUrl: './confirm-dailog.component.html',
  styleUrls: ['./confirm-dailog.component.css'],
})
export class ConfirmDailogComponent implements OnInit {
  constructor() {}
  @ViewChild('myModal') child: ElementRef;
  message = 'Are you Sure..?';
  ngOnInit() {}
  Cancel() {
    this.child.nativeElement.style.display = 'none';
  }
  Confirm() {}
}
