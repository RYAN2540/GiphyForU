import { Component, OnInit } from '@angular/core';
import { SearchedGif } from 'src/app/models/SearchedGif/searched-gif';
import { RequestGifService } from 'src/app/services/RequestGif/request-gif.service';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css']
})
export class GifSearchComponent implements OnInit {
  searchGif=new SearchedGif('');
  searchGif1=new SearchedGif('');
  thisSearchGif:SearchedGif;

  submitGif(){
    this.searchGif1=this.searchGif;
    this.gifService.requestGif(this.searchGif1.gifInput);
    this.thisSearchGif=this.gifService.searchedGif;    
    this.searchGif=new SearchedGif('');
  }

  constructor(private gifService:RequestGifService) { }

  ngOnInit(){    
    
  }

}
