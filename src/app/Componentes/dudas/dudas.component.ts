import { Component } from '@angular/core';

@Component({
  selector: 'app-dudas',
  templateUrl: './dudas.component.html',
  styleUrls: ['./dudas.component.css']
})
export class DudasComponent {
  accordionItems = [
    {
      title: '¿Qué métodos de pagos aceptan?',
      content: 'Aceptamos efectivo y transferencias bancarias.',
      isOpen: false  // Cambiado a false
    },
    {
      title: '¿El hosting y dominio es gratis?',
      content: 'Así es, tanto el hosting como el dominio es bonificado durante el primer año hasta la renovación.',
      isOpen: false  // Cambiado a false
    },
    {
      title: '¿Puedo ver el proceso?',
      content: 'Por supuesto, usted puede ver el proceso de su web mientras lo estamos realizando sin problemas.',
      isOpen: false  // Cambiado a false
    },
    {
      title: '¿El sitio será adaptable a dispositivos móviles?',
      content: 'Si, el sitio web es totalmente adaptable, se adapta a pantallas de celulares, tablets, notebook, pc.',
      isOpen: false  // Cambiado a false
    },
  ];

  toggleItem(index: number): void {
    this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;
  }
  
}
