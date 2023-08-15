import { Component } from '@angular/core';
import { JsonplaceholderService } from '../apiServices/jsonplaceholder.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent {
  resultadoPeticion:any;
  constructor(private http:HttpClient){}

get() {
  this.http.get( 'https://jsonplaceholder.typicode.com/posts')
  .subscribe(dato=>{this.resultadoPeticion = dato;})
}
post() {
  this.http.post( 'https://jsonplaceholder.typicode.com/posts',
  {
    title:'prevision viernes.',
    body: 'parcialmente soleado.',
    userId: 1})
    .subscribe(data=> {this.resultadoPeticion = data; } );

  }
  get_param(){
    const params = new HttpParams().set('userId','5')
    this.http.get( 'https://jsonplaceholder.typicode.com/posts',
    {params})
    .subscribe(data=> {this.resultadoPeticion = data; } );

  }


}




