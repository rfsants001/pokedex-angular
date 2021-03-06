import { Component, OnInit} from '@angular/core';

import { PokeApiService } from './../../service/poke-api.service';

//Interface
import {PokeInterface} from './pokeInterface';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})

export class  PokeListComponent implements OnInit {



  private setAllPokemons: PokeInterface[] = [];
  public getAllPokemons: PokeInterface[] = [];

  constructor(
    private pokeApiService: PokeApiService
  ) {

   }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    )
  }

  public getSearch(value: string){
    const filterPokemons = this.setAllPokemons.filter(
      (res: PokeInterface) => !res.name.indexOf(value.toLowerCase())
    );
    this.getAllPokemons = filterPokemons;
  }

}
