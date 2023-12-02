import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  showScrollToTopButton = false;

  constructor(public router: Router) { }

  ngOnInit(): void {

    window.addEventListener('scroll', this.checkScroll, { passive: true });

  }


  ngOnDestroy() {
    // Es importante remover el listener cuando el componente ya no está en uso.
    window.removeEventListener('scroll', this.checkScroll, { passive: true } as any);

  }

  checkScroll = (): void => {
    // Puedes ajustar el valor 100 al número de pixels que prefieras
    this.showScrollToTopButton = window.pageYOffset > 100;
  };

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}

