import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {AgmCoreModule} from '@agm/core';
import {MapasService} from './services/mapas.service';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7YxH9DDYSDNMI3QU1MambRV1sbba9Y98'
    }),
    AppRoutingModule
  ],
  providers: [
    MapasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  lat = 38.383115;
  lng = -0.509398;
}

