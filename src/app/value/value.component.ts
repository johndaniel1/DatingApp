import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(protected http: HttpClient) { }

  ngOnInit() {
    this.getvalues();
  }
getvalues() {
  this.http.get('http://localhost:59921/api/values').
  subscribe(response => { this.values = response;
  }, error => {
    console.log(error);
  });
}
}
