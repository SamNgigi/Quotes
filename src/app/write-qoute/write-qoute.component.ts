import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Qoute } from "../qoute";
@Component({
  selector: 'app-write-qoute',
  templateUrl: './write-qoute.component.html',
  styleUrls: ['./write-qoute.component.css']
})
export class WriteQouteComponent implements OnInit {

  inputQuote = new Qoute(0,"","");

  @Output() addQoute = new EventEmitter<Qoute>();

  submitQoute(){
    this.addQoute.emit(this.inputQuote);
  }

  constructor() {

  }

  ngOnInit() {
  }

}
