import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogConfig } from './dialog-config';

@Injectable()
export class ConfirmationServiceService {
  private dialogConfigSubject = new Subject<DialogConfig>();
  constructor() {}
  subscribeToDialogConfigChange() {
    return this.dialogConfigSubject.asObservable();
  }

  showDialog(dialogConfig: DialogConfig) {
    this.dialogConfigSubject.next(dialogConfig);
  }
  closeDialog() {
    this.dialogConfigSubject.next({ visible: false });
  }
}
