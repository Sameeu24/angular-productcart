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
      url: "/images/image-waffle-desktop.jpg",
      title: "Waffle with Berries",
      subtitle: "Waffle",
      price:"23"
    },
    {
      url: "/images/image-creme-brulee-desktop.jpg",
      title: "Vanilla Bean Crème Brûlée",
      subtitle: "Crème Brûlée",
      price:"7.00"
    },
    {
      url: "/images/image-macaron-desktop.jpg",
      title:"Macaron Mix of Five",
      subtitle:"Macaron",
      price:"8.00"
    },
    {
      url: "/images/image-tiramisu-desktop.jpg",
      title:"Classic Tiramisu",
      subtitle: "Tiramisu",
      price:"5.50"
    },
    {
      url: "/images/image-baklava-desktop.jpg",
      title: "Pistachio Baklava",
      subtitle: "Baklava",
      price:'24'
    },
    {
      url: "/images/image-meringue-desktop.jpg",
      title:  "Lemon Meringue Pie",
      subtitle: "Pie",
      price:'24'
    }
    // Add more image objects as needed
  ];

}
