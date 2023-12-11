import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public router: Router) { }


  ngOnInit(): void {

  }

  navigateTo(event: Event, elementId: string): void {
    event.preventDefault(); // Prevenir la navegación por defecto
    const element = document.getElementById(elementId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  
      // Cerrar el menú después de la navegación
      this.closeMenu();
    }
  }
  
  closeMenu() {
    // Lógica para cerrar el menú, por ejemplo, desmarcar la casilla del interruptor
    const toggler = document.querySelector('.toggler') as HTMLInputElement;
    if (toggler) {
      toggler.checked = false;
    }
  }
  
  
}