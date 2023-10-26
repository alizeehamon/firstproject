import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  onomatopiaList: string[] = [];

  constructor(){

  }

  ngOnInit(): void {
    this.onomatopiaList = [
    "Bim", "Bam", "Boum", "Aïe"
    ]
  }

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopiaList.push(event);
  }
}
