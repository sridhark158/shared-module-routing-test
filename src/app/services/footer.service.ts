import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FooterService {
  private heightSource = new BehaviorSubject(55);
  currentHeight = this.heightSource.asObservable();

  constructor() { }

  setHeight(h: number) : void {
    this.heightSource.next(h);
  }

  getHeight() : Observable<number> {
    return this.currentHeight;
  }
}