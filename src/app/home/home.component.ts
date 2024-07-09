import { Component, OnInit } from '@angular/core';
import { men_jeans } from 'src/data/Men/men_jeans';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  men_jeans:any;
  ngOnInit(): void {
  this.men_jeans = men_jeans.slice(0,4)
  }

}
