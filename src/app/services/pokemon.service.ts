import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Pokemon {
  id: number;
  name: string;
  gender?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemons: Pokemon[] = [
    { id: 1, name: 'Carapuce', gender: 'Mâle' },
    { id: 2, name: 'Salamèche', gender: 'Femelle' },
    { id: 3, name: 'Pikachu', gender: 'Mâle' },
    { id: 4, name: 'Bulbizarre', gender: 'Femelle' },
  ];
  private pokemonList = new BehaviorSubject<Pokemon[]>(this.pokemons);
  pokemons$ = this.pokemonList.asObservable();

  addPokemon(name: string) {
    const newId =
      this.pokemons.length > 0
        ? Math.max(...this.pokemons.map((p) => p.id)) + 1
        : 1;
    const newPokemon: Pokemon = { id: newId, name: name, gender: 'Mâle' };
    this.pokemons.push(newPokemon);
    this.pokemonList.next(this.pokemons);
  }

  removePokemon(id: number) {
    this.pokemons = this.pokemons.filter((p) => p.id !== id);
    this.pokemonList.next(this.pokemons);
  }
}
