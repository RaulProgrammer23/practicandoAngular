import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { ListadoComponent } from './Components/listado/listado.component';
import { PinchacicoService } from './Service/pinchacico.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PinchacicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
