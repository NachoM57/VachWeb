import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent implements OnInit {
  paginas: any = []

  constructor(private dataService: DataService, public router: Router) { }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(datos => {
      //definir informacion a mostrar;
      this.paginas = datos.paginas;
      this.paginas = datos.paginas;
    })

  }

}
