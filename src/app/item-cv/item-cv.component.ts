import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Personne } from '../Model/personne';
@Component({
  selector: 'app-item-cv',
  standalone: true,
  imports: [],
  templateUrl: './item-cv.component.html',
  styleUrl: './item-cv.component.css'
})
export class ItemCVComponent {
  @Input() personne!: Personne;
  @Output() selectedpersonne= new EventEmitter();

  selectPersonne(){
    this.selectedpersonne.emit(
      this.personne
    );

  }

}
