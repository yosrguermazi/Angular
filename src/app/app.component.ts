import { Component } from '@angular/core';
import {CvComponent} from './cv/cv.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forma_angular';
}
