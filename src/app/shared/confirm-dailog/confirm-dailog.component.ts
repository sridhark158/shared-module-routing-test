import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationServiceService } from './confirmation-service.service';
import { DialogConfig } from './dialog-config';

@Component({
  selector: 'confirm-dailog',
  templateUrl: './confirm-dailog.component.html',
  styleUrls: ['./confirm-dailog.component.css'],
})
export class ConfirmDailogComponent implements OnInit {
  constructor(private cs: ConfirmationServiceService) {}
  @ViewChild('myModal') child: ElementRef;
  dialogConfig: DialogConfig;
  ngOnInit() {
    this.cs.subscribeToDialogConfigChange().subscribe((data: DialogConfig) => {
      this.dialogConfig = data;
      console.log(data);
    });
  }
}
