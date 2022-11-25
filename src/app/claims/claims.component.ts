import { Component, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';
import { Observable } from 'rxjs';
import { ConfirmationServiceService } from '../shared/confirm-dailog/confirmation-service.service';
import { DialogConfig } from '../shared/confirm-dailog/dialog-config';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss'],
})
export class ClaimsComponent implements OnInit {
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
      title: 'Your in Claims ',
      close: () => {
        this.cs.closeDialog();
      },
      message: 'Are You sure Your in Claims',
      visible: true,
      buttonConfigList: [
        {
          label: 'Yes',
          handler: () => {
            this.cs.closeDialog();
            this.changeHeight();
          },
        },
        {
          label: 'No',
          handler: () => {
            this.cs.closeDialog();
          },
        },
      ],
    };
    this.cs.showDialog(dialogConfig);
  }
}
