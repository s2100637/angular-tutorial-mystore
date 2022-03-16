import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faMobileAlt = faMobileAlt

  constructor() {}

  ngOnInit(): void {}
}
