import { Component, Input, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Product } from '../Models/Product';


@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent,CommonModule,ProductListComponent,ProductDetailComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  listOfString:string[]=["nikolay","mark","bimbim"]

  searchText:string='';

  @ViewChild('product-list') productListComponent : ProductListComponent;

  setSearchText(event:string){
    this.searchText=event;
  };
  

}
