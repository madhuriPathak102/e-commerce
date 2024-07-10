import { Component, OnInit } from '@angular/core';
import { gounsPage1 } from 'src/data/Gouns/gouns';
import { men_jeans } from 'src/data/Men/men_jeans';
import { mens_kurta } from 'src/data/Men/men_kurta';
import { lehngacholiPage2 } from 'src/data/Saree/lenghaCholiPage2';
import { mensShoesPage1 } from 'src/data/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  men_jeans:any;
  wemensGouns:any;
  lehangaCholi:any;
  mensKurta:any;
  menShoes:any;
  ngOnInit(): void {
  this.men_jeans = men_jeans.slice(0,4);
  this.wemensGouns = gounsPage1.slice(0,4);
  this.lehangaCholi = lehngacholiPage2.slice(0,4);
  this.mensKurta = mens_kurta.slice(0,4);
  this.menShoes = mensShoesPage1.slice(0,4);
  }

}
