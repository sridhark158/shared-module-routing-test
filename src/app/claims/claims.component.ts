import { Component, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  height:Observable<number>;
  constructor(private fhs: FooterService) { }

  ngOnInit() {
    this.height = this.fhs.getHeight();
  }
    changeHeight():void {
    this.fhs.setHeight(Math.floor(Math.random() * 31) + 50);
  }

}