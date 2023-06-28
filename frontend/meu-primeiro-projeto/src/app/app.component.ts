import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Marcos Vinício';

  adicionar(){
    console.log(`Adicionando ${this.nome}`);
    const numero: number = Math.round(Math.random() * 100);
    this.nome = 'João ' + numero;
  }

  alterarNome(event: any): void {
    //console.log(event);
    this.nome = event.target.value;
  }
}
