import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
  }
  search(searchTerm:string){
    if(searchTerm !== ''){
      this.serviceService.searchGif(searchTerm)
       
        
    
    }
  }

}
