import { Injectable, EventEmitter } from '@angular/core';
import { RequestsService } from './requests.service';
import { HttpParams } from '@angular/common/http';
import { VERSION } from 'src/app.version';

@Injectable({
  providedIn: 'root'
})
export class InterfazService {
  fotoTomada = new EventEmitter<any>();
  horaNoValida = new EventEmitter<any>();
  VERSION = VERSION;

  constructor(private _request: RequestsService) { }

  centroCostos() {
    const url = 'interfaz/listarCentroCosto';

    return this._request.doGet('json', url);
  }

  init() {
    const url = 'dispositivo/leerSerial';

    return this._request.doGet('json', url);
  }

  resetBack() {
    const url = 'interfaz/resetBack';

    return this._request.doGet('json', url);
  }

  centroCostoActual() {
    const url = 'interfaz/obtenerCentroCostoActual';

    return this._request.doGet('json', url);
  }

  ObtenerDetalleMarcas() {
    const url = 'interfaz/ObtenerDetalleMarcas';

    return this._request.doGet('json', url);
  }

  ObtenerFotos() {
    const url = 'interfaz/ListarAdjuntos';

    return this._request.doGet('json', url);
  }

  ObtenerMarcasNoEnviadas() {
    const url = 'interfaz/ObtenerMarcasNoEnviadas';

    return this._request.doGet('json', url);
  }

  ContarMarcasNoEnviadas() {
    const url = 'interfaz/ContarMarcasNoEnviadas';

    return this._request.doGet('json', url);
  }

  obtenerDispositivoId() {
    const url = 'interfaz/obtenerDispositivoId';

    return this._request.doGet('json', url);
  }

  CambiarCentroCosto(id: number) {
    const httpParams = new HttpParams().set('CentroCostoId', id.toString());
    const url = 'interfaz/CambiarCentroCosto';

    return this._request.doGet('json', url, httpParams);
  }

  CambiarTiempoEspera(id: number) {
    const httpParams = new HttpParams().set('Tiempo', id.toString());
    const url = 'interfaz/CambiarTiempoEspera';

    return this._request.doGet('json', url, httpParams);
  }

  tiempoEspera() {
    const url = 'interfaz/ObtenerTiempoEspera';

    return this._request.doGet('json', url);
  }

  versiones() {
    const url = 'interfaz/Versiones';

    return this._request.doGet('json', url);
  }

  version() {
    const httpParams = new HttpParams().set('version', this.VERSION.toString());
    const url = 'interfaz/VersionAdmin';

    return this._request.doGet('json', url, httpParams);
  }

  ObtenerAdjunto(id: number) {
    const httpParams = new HttpParams().set('AdjuntoId', id.toString());
    const url = 'interfaz/ObtenerAdjunto';

    return this._request.doGet('json', url, httpParams);
  }

  erroresMax() {
    const url = 'interfaz/erroresMax';

    return this._request.doGet('json', url);
  }

  cambiarCentro(id) {
    const httpParams = new HttpParams().set('CentroCostoId', id.toString());
    const url = 'interfaz/CambiarCentro';

    return this._request.doGet('json', url, httpParams);
  }

  cambiarErrores(id) {
    const httpParams = new HttpParams().set('Errores', id.toString());
    const url = 'interfaz/CambiarErrores';

    return this._request.doGet('json', url, httpParams);
  }

}
