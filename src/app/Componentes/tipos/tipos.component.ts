import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css']
})
export class TiposComponent implements OnInit {
  tipos: any = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(datos => {
      //definir informacion a mostrar;
      this.tipos = datos.tipos;
      this.tipos = datos.tipos;
    })

  }

}
