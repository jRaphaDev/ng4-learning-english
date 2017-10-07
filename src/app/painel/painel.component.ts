import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { PHRASES } from './phrase-mock';
import { Phrase } from '../shared/phrase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public phrases: Phrase[] = PHRASES;
  public instruction: string = 'Traduza a frase: ';
  public answer: string = '';

  public roundPhrase: Phrase;
  public round: number = 0;

  public progress: number = 0;

  public attempts: number = 3;

  @Output() public gameOver: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.refreshRound();
  }

  ngOnInit() {}

  ngOnDestroy() {
  }

  public refreshAnswer(answer: Event): void {
    this.answer = ((<HTMLInputElement>answer.target).value);
  }

  public verificarAnswer(): void {

    if (this.roundPhrase.phrasePt === this.answer) {

      this.round++;
      this.progress += (100 / this.phrases.length);

      if (this.round === 4) {
        this.gameOver.emit('vitória');
      }

      this.refreshRound();

    } else {

      this.attempts--;

      if (this.attempts === -1) {
        this.gameOver.emit('derrota');
      }
    }

  }

  public refreshRound(): void {
    this.roundPhrase = this.phrases[this.round];
    this.answer = '';
  }

}