import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodMenuComponent } from './foodmenu/foodmenu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FoodMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-product-cart';
}
