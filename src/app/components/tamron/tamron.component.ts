import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tamron',
  templateUrl: './tamron.component.html',
  styleUrls: ['./tamron.component.css']
})
export class TamronComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  counter(i: number) {
    return new Array(i);
}
}
