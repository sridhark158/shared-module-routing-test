import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FooterService } from '../services/footer.service';
import { Observable } from 'rxjs';
import { ConfirmationServiceService } from '../shared/confirm-dailog/confirmation-service.service';
import { DialogConfig } from '../shared/confirm-dailog/dialog-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('myModal') child: ElementRef;
  height: Observable<number>;
  constructor(
    private fhs: FooterService,
    private cs: ConfirmationServiceService
  ) {}

  ngOnInit() {
    this.height = this.fhs.getHeight();
  }
  changeHeight(): void {
    this.fhs.setHeight(Math.floor(Math.random() * 31) + 50);
  }
  loadConfirm() {
    const dialogConfig: DialogConfig = {
      title: 'Your in Home ',
      message: 'Are You sure Your in Home',
      visible: true,
      buttonConfigList: [
        {
          label: 'Home Okay',
          handler: () => {
            this.cs.closeDialog();
          },
        },
        {
          label: 'Cancel',
          handler: () => {
            this.cs.closeDialog();
          },
        },
      ],
    };
    this.cs.showDialog(dialogConfig);
  }
}
