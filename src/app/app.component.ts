import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public gaming: boolean = true;
  public typeEnding: string

  public gameOver(type: string): void {
    this.gaming = false;
    this.typeEnding = type;
  }

  public restartGame(): void {
    this.gaming = true;
    this.typeEnding = undefined;
  }

}
