import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent,CommonModule,ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  listOfString:string[]=["nikolay","mark","bimbim"]
  

}
