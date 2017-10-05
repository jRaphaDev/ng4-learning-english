import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ];

  constructor() {}

  ngOnInit() {
    console.log(`testando qntd ${this.tentativas}`)
  }

  ngOnChanges() {
    let indice = (this.coracoes.length - this.tentativas);

    if (this.tentativas !== this.coracoes.length) {
      this.coracoes[indice-1].cheio = false;
    }

    console.log(`testando qntd ${this.tentativas} changes`)
  }

}
