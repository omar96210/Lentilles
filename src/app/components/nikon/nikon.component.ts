import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nikon',
  templateUrl: './nikon.component.html',
  styleUrls: ['./nikon.component.css']
})
export class NikonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  counter(i: number) {
    return new Array(i);
}

}
