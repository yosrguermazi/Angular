import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import {ItemCVComponent} from '../item-cv/item-cv.component'
import { Personne } from '../Model/personne';
@Component({
  selector: 'app-liste-cv',
  standalone: true,
  imports: [ItemCVComponent],
  templateUrl: './liste-cv.component.html',
  styleUrl: './liste-cv.component.css'
})
export class ListeCVComponent implements OnInit{
  @Input() personnes: Personne[] =[];
  @Output() selectedPersonne =new EventEmitter();
  ngOnInit(): void {
  
}
selectPersonne(selectedPersonne:any){
  this.selectedPersonne.emit(selectedPersonne)
  
};
}
