import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }


  ngOnInit(): void {

  }

  menuValue: boolean = false;
  menu_icon: string = 'fa-solid fa-bars';
  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }
  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'fa-solid fa-bars';
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
}