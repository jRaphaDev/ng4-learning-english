import { Heart } from './../shared/heart.model';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  @Input() public attempts: number;

  public hearts: Heart[] = [
    new Heart(true), new Heart(true), new Heart(true)
  ];

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges() {
    let indice = (this.hearts.length - this.attempts);

    if (this.attempts !== this.hearts.length) {
      this.hearts[indice-1].full = false;
    }

  }

}
