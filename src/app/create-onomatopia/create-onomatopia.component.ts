import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent implements OnInit {

  @Input()
  onomatopia!: string;

  @Output()
  newOnomatopia: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendOnomotopiaToParent() {
    this.newOnomatopia.emit(this.onomatopia);
  }

  createOnomatopia(){
    this.sendOnomotopiaToParent();
  }

}
