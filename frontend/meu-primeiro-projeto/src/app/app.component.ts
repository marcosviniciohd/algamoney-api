import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Marcos';
  sobreNome: string = '';

  adicionar(nome: string, sobreNome: string) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    console.log(`Adicionado nome: ${this.nome} e sobreNome: ${this.sobreNome}`);
  }

  /* adicionar(){
    console.log(`Adicionando ${this.nome}`);
    const numero: number = Math.round(Math.random() * 100);
    this.nome = 'João ' + numero;
  } */

  /* alterarNome(event: any): void {
    //console.log(event);
    this.nome = event.target.value;
  } */
}
