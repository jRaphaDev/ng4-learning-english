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
  public resposta: string = '';

  public rodadaFrase: Frase;
  public rodada: number = 0;

  public progress: number = 0;

  public tentativas: number = 3;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {}

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  public verificarResposta(): void {

    console.log(`Verificar resposta: ${this.resposta}`);

    if (this.rodadaFrase.frasePt === this.resposta) {

      this.rodada++;
      this.progress += (100 / this.frases.length);

      this.atualizaRodada();

    } else {

      this.tentativas--;
      if (this.tentativas === -1) {
        alert('Voce perdeu todas as tentativas !!!');
      }
    }

  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}