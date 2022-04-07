import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

//Services
import {PokeApiService} from '../../service/poke-api.service';

//Interfaces
import {PokeStatus} from './pokeInterfaceStatus';
import {PokeEvolutions} from './pokeInterfaceEvolutions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemonStatus: PokeStatus[] = [];
  public pokemonEvolutions: PokeStatus[] = [];

  public isLoading: boolean = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService,
  ) { }

  ngOnInit(): void {
    this.pokemon;
  }

  get pokemon() {
    const pokeId = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${pokeId}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${pokeId}`);

    //carregar duas buscas ao mesmo tempo
    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemonStatus = res;
        console.log(this.pokemonStatus[0].name);

        this.pokeApiService.apiGetPokemons(res[1].evolution_chain.url).subscribe(
          res => {
            this.pokemonEvolutions = res;
            this.isLoading = true;
          }
        )

      }

    );

  }

}
