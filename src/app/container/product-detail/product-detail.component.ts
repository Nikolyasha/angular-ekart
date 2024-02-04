import { Component } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product: Product;

}
