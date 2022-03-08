import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'Click'
  @Input() color: string = 'blue'
  @Output() btnClick = new EventEmitter()
  
  faPlus: IconDefinition = faPlus

  constructor() { }



  ngOnInit(): void {
  }

  onClick() {
    console.log('aaa');
    this.btnClick.emit()
  }
}
