import { Component, OnInit } from '@angular/core';
import { Qoute } from "../qoute"
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  qoutes = [
    new Qoute (1 ,"In the End, we will remember not the words of our enemies, but the silence of our friends."," Martin Luther King, Jr."),
    new Qoute (1 ,"When you fall, I will be there to catch you. ","With love, the floor."),
    new Qoute (1 ,"My six pack is protected by a layer of fat.", "Anonymous."),
  ]

  constructor() { }

  ngOnInit() {
  }

}
