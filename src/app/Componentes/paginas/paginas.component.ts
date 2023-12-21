import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent implements OnInit {
  //inicializar variables de instancia
  paginas: any = []

  constructor(public router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(landing => {
      console.log(landing);
      //definir informacion a mostrar;
      this.paginas = landing.paginas;


    })

  }

}
