import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-regalo',
  templateUrl: './regalo.component.html',
  styleUrls: ['./regalo.component.css']
})
export class RegaloComponent implements OnInit {
  regalo: any = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(datos => {
      //definir informacion a mostrar;
      this.regalo = datos.regalo;
      this.regalo = datos.regalo;
    })

  }

}

