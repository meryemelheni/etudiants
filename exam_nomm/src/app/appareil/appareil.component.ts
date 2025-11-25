import { Component } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent {

  name: string = "Machine à laver";
  status: string = "éteint";

  getStatus() {
    return this.status;
  }

  allumerAppareil() {
    this.status = "allumé";
  }

  eteindreAppareil() {
    this.status = "éteint";
  }
}
