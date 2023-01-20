import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
gif = new BehaviorSubject<any>([])
  constructor(private http:HttpClient) { }
  giphyApiData(){
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=oZPkzzrhKk9xRiRBk2BFLpYYvub9Z3fw&limit=50&rating=g')
    .subscribe((response:any)=>{
      this.gif.next(response.data)

    })

  }
  searchGif(gifName : string){
    return this.http.get('https://api.giphy.com/v1/gifs/search?api_key=oZPkzzrhKk9xRiRBk2BFLpYYvub9Z3fw&q=q&limit=50&offset=0&rating=g&lang=en')
    .subscribe((response:any)=>{
      this.gif.next(response.data)
    })
  }

  getGifs(){
    return this.gif.asObservable();
  }
}

