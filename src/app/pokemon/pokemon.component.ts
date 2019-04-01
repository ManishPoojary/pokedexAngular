import { Component, OnInit, Input } from '@angular/core';
import { pokemonClass } from '../shared/AbstractClass/pokemonClass';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonId } from '../shared/models/pokemonId';
@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent extends pokemonClass implements OnInit {
  query: string;
    
    ngOnInit() {
      this.getPokemons()
      
    }

    loadMore(data){
      
    this.addPokemons(data['next']);
    // console.log(this.pokemons['results'].push({"name":"Manish","url":"https://pokeapi.co/api/v2/pokemon/23/"}))
    }
    viewAll(){
      this.addPokemons('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964');
    }
    
}
