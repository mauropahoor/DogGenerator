import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  apiURL: String = 'https://dog.ceo/api/breeds/image/random';

  img = "";

  constructor(private http : HttpClient) { 
  }

  ngOnInit(): void {
  }

  getImage(){
    this.http.get(`${ this.apiURL }`).subscribe(request => {
      let result: any = request;
      this.img = result.message;
    });
  }

}
