import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter(); //Pega os output da pesquisa

  constructor() { }

  ngOnInit(): void {
  }

  public searchInput(value: string) {
    this.emmitSearch.emit(value);
  }
}
