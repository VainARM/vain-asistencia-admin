import { Component, OnInit } from '@angular/core';
import { InterfazService } from 'src/app/services/interfaz.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'enviado', 'fechaenviado', 'ver'];
  tabla: any;
  data: any;
  foto: string;
  mostrarFoto: boolean;

  constructor(private interfaz: InterfazService) { }

  ngOnInit() {
    this.mostrarFoto = false;

    this.interfaz.ObtenerFotos().then((res: any) => {
      this.data = res.result;
      this.tabla = new MatTableDataSource(this.data);
    });
  }

  buscarFoto(id) {
    this.interfaz.ObtenerAdjunto(id).then((res: any) => {
      this.mostrarFoto = true;
      this.foto = 'data:image/jpeg;base64,' + res.result;
    });
  }

  applyFilter(filterValue: string) {
    this.tabla.filter = filterValue.trim().toLowerCase();
  }

  volver() {
    this.mostrarFoto = false;
  }
}
