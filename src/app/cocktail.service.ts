import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
cocktails: Cocktail[] =
  [
  {
      name: 'Margarita',
      price: 7,
      image: 'https://images.pexels.com/photos/1590151/pexels-photo-1590151.jpeg'
    },
    {
      name: 'Tequila Sunrise',
      price: 8,
      image: 'https://images.pexels.com/photos/8679426/pexels-photo-8679426.jpeg'
    },
    {
      name: 'Mojito',
      price: 6,
      image: 'https://images.pexels.com/photos/298719/pexels-photo-298719.jpeg'
    }
  ]

  constructor() { }

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}


