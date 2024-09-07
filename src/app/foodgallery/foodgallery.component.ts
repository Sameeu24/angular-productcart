import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-foodgallery',
  standalone: true,
  imports: [],
  templateUrl: './foodgallery.component.html',
  styleUrl: './foodgallery.component.css'
})
export class FoodGalleryComponent {
  @Input() url:string='';
  @Input() title:string='';
  @Input() subtitle:string='';
  @Input() price:string='';

}
