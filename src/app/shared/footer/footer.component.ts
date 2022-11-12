import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FooterService } from '../../services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private fhs: FooterService) { }
  @ViewChild('footer') footer: ElementRef; 
  height:number;
  
  ngOnInit() {

    this.fhs.getHeight().subscribe(h=> this.height = h);
  }

}