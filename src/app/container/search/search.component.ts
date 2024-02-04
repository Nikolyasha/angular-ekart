import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchText:string="";

  //create event
  @Output()
  searchTextChange:EventEmitter<string>=new EventEmitter<string>();

  onSearchTextChange(){
  };

  updateSearchtext(inputEl:HTMLInputElement){
     this.searchText = inputEl.value;
     this.searchTextChange.emit(this.searchText);
  };
}
