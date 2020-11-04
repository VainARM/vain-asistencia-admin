import { Component, OnInit } from '@angular/core';
import { InterfazService } from 'src/app/services/interfaz.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  reseteado: boolean;

  constructor(private interfaz: InterfazService) { }

  ngOnInit() {
  }

  guardar() {
    this.interfaz.resetBack().then(res => {
      this.reseteado = true;
    });
  }

}
