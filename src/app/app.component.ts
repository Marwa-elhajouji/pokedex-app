import { Component } from '@angular/core';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [PokemonItemComponent, PokedexComponent, RouterModule],
})
export class AppComponent {
  title = 'Pokedex App';
}
