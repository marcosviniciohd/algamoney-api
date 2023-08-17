import { Component } from "@angular/core";

@Component({
    selector: 'hello',
    template: `<h1>Hello World, {{ nome }}</h1>`,
    styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
    nome: string = 'Angular';
}