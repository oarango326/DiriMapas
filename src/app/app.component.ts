import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import {Marcador} from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DiriMapas';
  lat = 38.382538;
  lng = -0.510123;
  zoom = 17;
  marcadorSel: any = null;
  constructor( public _ms: MapasService) {
    this._ms.cargarMarcadores();
  }
  clickMapa( evento ) {
    const nuevoMarcador: Marcador = {
      lat : evento.coords.lat,
      lng : evento.coords.lng,
      titulo : 'Sin titulo',
      draggable : true
    };
    this._ms.insertarMarcador(nuevoMarcador);
    console.log ( evento);
  }

  clickMarcador( marcador: Marcador, i: number) {
    console.log(marcador, i );
    this.marcadorSel = marcador;
  }

  dragEndMarcador( marcador: Marcador, evento) {
    const lat = evento.coords.lat;
    const lng = evento.coords.lng;
    marcador.lat = lat;
    marcador.lng = lng;
    this._ms.guardarMarcadores();
  }
}
