import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, Input } from '@angular/core';

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

}
