import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
})
export class GifComponent implements OnInit ,OnDestroy {
  giphy: any[]=[];
  p:number =1;
  subscription!: Subscription ; 
  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
    this.serviceService.giphyApiData();
    
    this.subscription = this.serviceService.getGifs()
    .subscribe((response:any)=>{
      this.giphy = response;

    })
    
 
      
  }
  ngOnDestroy(){
    this.subscription.unsubscribe
  }

}
