import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  faFacebookF = faFacebookF;
  faTwitterSquare = faTwitterSquare;
  faInstagram = faInstagram;

  products = products;
  // items;
  product: any;

  constructor() { }

  share() {
    window.alert('The product has been shared. :(');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale.');
  }

  addToCart(product: any) {
    window.alert('Your product has been added to the cart.');
    // this.cartService.addToCart(product);
  }

  ngOnInit(): void {
  }

}
