import { Frase } from './../shared/frase.model';
import { Component, OnInit } from '@angular/core';

import { FRASES } from './frase-mock';
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase: ';
  public resposta: string;

  public rodadaFrase: Frase;
  public rodada: number = 0;

  constructor() {}

  ngOnInit() {}

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  public verificarResposta(): void {
    this.frases.map(frase => {})
    console.log(`Verificar resposta: ${this.resposta}`)
  }

}