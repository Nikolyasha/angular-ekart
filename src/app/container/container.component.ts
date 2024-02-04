import { Component, Input } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';


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

  setSearchText(event:string){
    this.searchText=event;
  };
  

}
