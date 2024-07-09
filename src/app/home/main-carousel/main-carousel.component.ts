import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
})
export class MainCarouselComponent implements OnInit{
  carouselData : any;
  currentSlide=0;
  interval:any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
