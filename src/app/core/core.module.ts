import { NgModule } from '@angular/core';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    NoEncontradoComponent,
    InicioComponent,
  ],
  imports: [
    HttpClientModule,
  ],
  exports: [
    NoEncontradoComponent,
    InicioComponent,
    HttpClientModule,
    MaterialModule
  ]
})
export class CoreModule { }
