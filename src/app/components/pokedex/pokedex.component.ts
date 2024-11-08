import { Component } from '@angular/core';
import { PokemonService, Pokemon } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonItemComponent } from '../pokemon-item/pokemon-item.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  templateUrl: './pokedex.component.html',
  imports: [
    CommonModule,
    NgbToastModule,
    NgbModule,
    FormsModule,
    PokemonItemComponent,
  ],
})
export class PokedexComponent {
  pokemons: Pokemon[] = [];
  topPokemons: Pokemon[] = [];
  selectedPokemon: Pokemon | null = null;
  newPokemonName: string = '';

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.pokemons$.subscribe((data) => {
      this.pokemons = data;
      this.topPokemons = data.slice(0, 3);
    });
  }
  addPokemon() {
    if (this.newPokemonName.trim()) {
      this.pokemonService.addPokemon(this.newPokemonName);
      this.newPokemonName = '';
    }
  }
  onDelete(id: number) {
    this.pokemonService.removePokemon(id);
  }

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    console.log('Pokémon sélectionné :', this.selectedPokemon);
  }
}
