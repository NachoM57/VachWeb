import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  nosotros: any = [];


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(datos => {
      //definir informacion a mostrar;
      this.nosotros = datos.nosotros;
      this.nosotros = datos.nosotros;
    })

  }

  transformToHtmlBreaks(text: string): string {
    return text.replace(/\n\n/g, '<br>');
  }
}
