import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card.component';
import { HatService } from './services/hat.service';
import { Hat } from './models/hat.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header class="header-container">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-8">
              <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                Hat Store
              </h1>
              <div class="hidden md:flex space-x-6">
                <a href="#" class="nav-link">New Arrivals</a>
                <a href="#" class="nav-link">Collection</a>
                <a href="#" class="nav-link">Sale</a>
              </div>
            </div>
            <div class="flex items-center gap-6">
              <button class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300 relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span class="absolute -top-1 -right-1 bg-black text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main class="max-w-7xl mx-auto">
        <div class="text-center py-12">
          <h2 class="text-4xl font-bold mb-4">Featured Collection</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of premium hats, designed for style and comfort.
          </p>
        </div>
        
        <div class="grid-container">
          <app-product-card *ngFor="let hat of hats" [hat]="hat"></app-product-card>
        </div>
      </main>

      <a href="https://wa.me/YOUR_PHONE_NUMBER" 
         target="_blank" 
         class="whatsapp-button group">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
        </svg>
      </a>
    </div>
  `
})
export class AppComponent {
  hats: Hat[] = [];

  constructor(private hatService: HatService) {
    this.hats = this.hatService.getHats();
  }
}