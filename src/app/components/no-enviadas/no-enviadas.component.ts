import { Component, OnInit } from '@angular/core';
import { InterfazService } from 'src/app/services/interfaz.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-no-enviadas',
  templateUrl: './no-enviadas.component.html',
  styleUrls: ['./no-enviadas.component.css']
})
export class NoEnviadasComponent implements OnInit {
  displayedColumns: string[] = ['rut', 'nombre', 'fecha', 'enviado'];
  tabla: any;
  data: any;

  constructor(private interfaz: InterfazService) { }

  ngOnInit() {
    this.interfaz.ObtenerMarcasNoEnviadas().then((res: any) => {
      this.data = res.result;
      this.tabla = new MatTableDataSource(this.data);
    });
  }

  applyFilter(filterValue: string) {
    this.tabla.filter = filterValue.trim().toLowerCase();
  }
}
