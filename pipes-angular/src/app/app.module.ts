import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizarNombrePipe } from '../app/pipe/capitalizar-nombre.pipe';


//Para poner una fecha en español
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { PasswordPipe } from './pipe/password.pipe';


registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    CapitalizarNombrePipe,
    PasswordPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
     {provide:LOCALE_ID, useValue: "es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
