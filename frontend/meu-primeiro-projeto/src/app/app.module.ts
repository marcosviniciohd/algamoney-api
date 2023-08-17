import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    HelloComponent,
    BemVindoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
