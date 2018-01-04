import { Component, OnInit } from '@angular/core';
import { Qoute } from "../qoute";
@Component({
  selector: 'app-write-qoute',
  templateUrl: './write-qoute.component.html',
  styleUrls: ['./write-qoute.component.css']
})
export class WriteQouteComponent implements OnInit {

  writtenQuote = new Qoute(0,"","");

  constructor() {

  }

  ngOnInit() {
  }

}
