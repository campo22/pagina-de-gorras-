import { Injectable } from '@angular/core';
import { Hat } from '../models/hat.model';

@Injectable({
  providedIn: 'root',
})
export class HatService {
  private hats: Hat[] = [
    {
      id: 1,
      name: 'Classic Snapback',
      price: 29.99,
      colors: ['#FF0000', '#0000FF', '#00B8B8'],
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'assets/hat-red.jpg',
      description: 'Premium quality snapback with adjustable strap',
    },
    {
      id: 2,
      name: 'Urban Fitted',
      price: 34.99,
      colors: ['#000000', '#FF0000', '#0000FF'],
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'assets/hat-blue.jpg',
      description: 'Modern fitted cap for urban style',
    },
    {
      id: 3,
      name: 'Classic Snapback',
      price: 29.99,
      colors: ['#FF0000', '#0000FF', '#00B8B8'],
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'assets/hat-red.jpg',
      description: 'Premium quality snapback with adjustable strap',
    },
  ];

  getHats(): Hat[] {
    return this.hats;
  }
}
