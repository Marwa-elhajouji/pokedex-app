import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class PokemonItemComponent {
  @Input() pokemon!: Pokemon;
  @Input() canRemove: boolean = true;
  @Output() delete = new EventEmitter<number>();
  @Output() select = new EventEmitter<Pokemon>();

  remove() {
    this.delete.emit(this.pokemon.id);
  }

  onSelect() {
    this.select.emit(this.pokemon);
  }
}
