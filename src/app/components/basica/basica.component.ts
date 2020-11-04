import { Component, OnInit } from '@angular/core';
import { InterfazService } from 'src/app/services/interfaz.service';

@Component({
  selector: 'app-basica',
  templateUrl: './basica.component.html',
  styleUrls: ['./basica.component.css']
})
export class BasicaComponent implements OnInit {
  centros: any[];
  centroSelected: any;
  tiempoEspera: any;
  dispositivoId: any;
  errores: any;


  constructor(private interfaz: InterfazService) { }

  ngOnInit() {
    this.centros = [];

    this.interfaz.centroCostoActual().then((res: any) => {
      this.centroSelected = res.result;
    });

    this.interfaz.tiempoEspera().then((res: any) => {
      this.tiempoEspera = res.result;
    });

    this.interfaz.centroCostos().then((res: any) => {
      this.centros = res.result;
    });

    this.interfaz.obtenerDispositivoId().then((res: any) => {
      this.dispositivoId = res.result;
    });

    this.interfaz.erroresMax().then((res: any) => {
      this.errores = res.result;
    });
  }

  guardar() {
    this.interfaz.cambiarCentro(this.centroSelected).then(() => {});
    this.interfaz.CambiarTiempoEspera(this.tiempoEspera).then(() => {});
    this.interfaz.cambiarErrores(this.errores).then(() => {});
  }

  serial() {
    this.interfaz.init().then(() => {
      window.location.reload();
    });
  }

}
