import {Input, Component } from '@angular/core';
import { FoodGalleryComponent } from '../foodgallery/foodgallery.component'

@Component({
  selector: 'app-foodmenu',
  standalone: true,
  imports: [FoodGalleryComponent],
  templateUrl: './foodmenu.component.html',
  styleUrl: './foodmenu.component.css'
})
export class FoodMenuComponent {
  foodItems = [
    {
      url: 'https://example.com/image1.jg',
      title: 'Image 1',
      subtitle: 'This is the first image',
      price:'23'
    },
    {
      url: 'https://example.com/image1.jpg',
      title: 'Image 2',
      subtitle: 'This is the second image',
      price:'24'
    },
    {
      url: 'https://example.com/image1.jpg',
      title: 'Image 2',
      subtitle: 'This is the second image',
      price:'24'
    },
    {
      url: 'https://example.com/image1.jpg',
      title: 'Image 2',
      subtitle: 'This is the second image',
      price:'24'
    },
    {
      url: 'https://example.com/image1.jpg',
      title: 'Image 2',
      subtitle: 'This is the second image',
      price:'24'
    }
    // Add more image objects as needed
  ];

}
