import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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

  @ViewChild('searchInput') searchInputEl:ElementRef;

  // onSearchTextChange(){
  // };

  updateSearchtext(){
     this.searchText = this.searchInputEl.nativeElement.value;
     this.searchTextChange.emit(this.searchText);
  };
}
