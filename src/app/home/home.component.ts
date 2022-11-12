import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FooterService } from '../services/footer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('myModal') child: ElementRef;
  height: Observable<number>;
  constructor(private fhs: FooterService) {}

  ngOnInit() {
    this.height = this.fhs.getHeight();
    this.child.nativeElement.style.display = 'block';
  }
  changeHeight(): void {
    this.fhs.setHeight(Math.floor(Math.random() * 31) + 50);
  }
}
