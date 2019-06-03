import { Injectable } from '@angular/core';
import {Marcador} from '../interfaces/marcador.interface';

@Injectable({
  providedIn: 'root'
})
export class MapasService {
  marcadores: Marcador[] = [];

  constructor() {
    const nuevoMarcador: Marcador = {
      lat: 38.383115,
      lng: -0.509398,
      titulo: 'Escuela politecnica IV',
      draggable: true,
      desc: 'Aqui damos la clase de DIRI'
    };
    this.marcadores.push(nuevoMarcador);
  }

  insertarMarcador( marcador: Marcador ) {
    this.marcadores.push (marcador);
    this.guardarMarcadores();
  }

  guardarMarcadores() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }
  cargarMarcadores() {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(
        localStorage.getItem('marcadores'));
    } else {
      const nuevoMarcador : Marcador = {
        lat : 38.383115,
        lng : -0.509398,
        titulo : 'Escuela politecnica IV',
        draggable : true,
        desc: 'Primer Marcador'
      };
      this.marcadores.push( nuevoMarcador );
    }
  }
  borrarMarcador( idx: number ) {
    this.marcadores.splice(idx, 1);
    this.guardarMarcadores();
  }

}
