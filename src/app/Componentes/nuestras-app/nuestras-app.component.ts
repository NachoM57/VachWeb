import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-nuestras-app',
  templateUrl: './nuestras-app.component.html',
  styleUrls: ['./nuestras-app.component.css']
})
export class NuestrasAppComponent implements OnInit {
  disenos: any = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(datos => {
      //definir informacion a mostrar;
      this.disenos = datos.disenos;
      this.disenos = datos.disenos;
    })

  }

}

