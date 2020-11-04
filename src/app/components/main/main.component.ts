import { Component, OnInit } from '@angular/core';
import { InterfazService } from 'src/app/services/interfaz.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  basica: boolean;
  marcas: boolean;
  fotos: boolean;
  log: boolean;
  version: string;
  noenv: boolean;

  constructor(private interfaz: InterfazService) { }

  ngOnInit() {
    this.reset();
    this.interfaz.version().then(() => {
      this.interfaz.versiones().then((res: any) => {
        this.version = res.result;
      });
    });
    this.basica = true;
  }

  reset() {
    this.basica = false;
    this.fotos = false;
    this.marcas = false;
    this.noenv = false;
    this.log = false;
  }

  lector() {
    window.open('http://localhost', '_self');
  }

  setFoto() {
    this.reset();
    this.fotos = true;
  }

  setNoenv() {
    this.reset();
    this.noenv = true;
  }

  setMarca() {
    this.reset();
    this.marcas = true;
  }

  setLog() {
    this.reset();
    this.log = true;
  }

  setBasica() {
    this.reset();
    this.basica = true;
  }

}
