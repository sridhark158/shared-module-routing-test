import { Component, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  height:Observable<number>;
  constructor(private fhs: FooterService) { }

  ngOnInit() {
    this.height = this.fhs.getHeight();
  }
  changeHeight():void {
    this.fhs.setHeight(Math.floor(Math.random() * 31) + 50);
  }

}