import { Component, Input } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [],
  templateUrl: './detail-cv.component.html',
  styleUrl: './detail-cv.component.css'
})
export class DetailCVComponent {
  @Input() lapersonne!: Personne;

}
