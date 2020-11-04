import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { InterfazService } from 'src/app/services/interfaz.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  displayedColumns: string[] = ['rut', 'nombre', 'fecha', 'enviado'];
  tabla: any;
  data: any;

  constructor(private interfaz: InterfazService) { }

  ngOnInit() {
    this.interfaz.ObtenerDetalleMarcas().then((res: any) => {
      this.data = res.result;
      this.tabla = new MatTableDataSource(this.data);
    });
  }

  applyFilter(filterValue: string) {
    this.tabla.filter = filterValue.trim().toLowerCase();
  }
}
