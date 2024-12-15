import { Component, OnInit } from '@angular/core';
import { ListeCVComponent } from '../liste-cv/liste-cv.component';
import { Personne } from '../Model/personne';
import { DetailCVComponent } from '../detail-cv/detail-cv.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeCVComponent, DetailCVComponent],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'] 
})
export class CvComponent implements OnInit {
  personnes: Personne[] = []; 
  selectedpersonne!: Personne;
  selectPersonne(personne:any)
  {
    this.selectedpersonne= personne;
  }
  
  constructor() {}

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'guermazi', 'yosr', 22, 'im1.jpg', 12534856, 'Etudiante'),
      new Personne(2, 'zguem', 'asma', 23, 'im2.jpg', 45864478, 'Comptable'),
      new Personne(3, 'othmani', 'sumaya', 21, 'im3.jpg', 45589632, 'Etudiante'),
      new Personne(4, 'sahnoun', 'youssef', 22, 'im4.jpg', 125658848, 'Pecheur'),
      new Personne(5, 'guez', 'sousou', 20, 'im5.JPG', 85236974, 'Vendeuse'),
    ];
  }
}
