import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hat } from '../models/hat.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card group">
      <div class="product-image-container" [style.backgroundColor]="selectedColor">
        <span class="category-badge">New Arrival</span>
        <div class="p-8">
          <img [src]="hat.image" 
               [alt]="hat.name" 
               class="product-image w-full h-auto transform -rotate-12 group-hover:rotate-0">
        </div>
      </div>
      <div class="p-6 space-y-6">
        <div>
          <h2 class="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
            {{ hat.name }}
          </h2>
          <p class="text-gray-600">{{ hat.description }}</p>
        </div>
        
        <div>
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Select Size</p>
          <div class="flex flex-wrap gap-3">
            <button *ngFor="let size of hat.sizes"
                    [class.active]="size === selectedSize"
                    (click)="selectedSize = size"
                    class="size-button">
              {{ size }}
            </button>
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Select Color</p>
          <div class="flex gap-4">
            <div *ngFor="let color of hat.colors"
                 [style.backgroundColor]="color"
                 [class.active]="color === selectedColor"
                 (click)="selectedColor = color"
                 class="color-dot">
            </div>
          </div>
        </div>
        
        <div class="flex justify-between items-center pt-4">
          <span class="price-tag">\${{ hat.price.toFixed(2) }}</span>
          <button class="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `
})
export class ProductCardComponent {
  @Input() hat!: Hat;
  selectedSize: string = 'M';
  selectedColor: string = '';

  ngOnInit() {
    this.selectedColor = this.hat.colors[0];
  }
}