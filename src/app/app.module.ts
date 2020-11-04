import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MarcasComponent } from './components/marcas/marcas.component';
import { LogComponent } from './components/log/log.component';
import { BasicaComponent } from './components/basica/basica.component';
import { FotoComponent } from './components/foto/foto.component';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { InterfazService } from './services/interfaz.service';
import { RequestsService } from './services/requests.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoEnviadasComponent } from './components/no-enviadas/no-enviadas.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent,
    LogComponent,
    FotoComponent,
    BasicaComponent,
    NoEnviadasComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ InterfazService, RequestsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
