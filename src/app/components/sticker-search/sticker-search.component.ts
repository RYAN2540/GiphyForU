import { Component, OnInit } from '@angular/core';
import { SearchedSticker } from 'src/app/models/SearchedSticker/searched-sticker';
import { RequestStickerService } from 'src/app/services/RequestSticker/request-sticker.service';

@Component({
  selector: 'app-sticker-search',
  templateUrl: './sticker-search.component.html',
  styleUrls: ['./sticker-search.component.css']
})
export class StickerSearchComponent implements OnInit {
  searchSticker=new SearchedSticker('');
  searchSticker1=new SearchedSticker('');
  thisSearchSticker:SearchedSticker;

  submitSticker(){
    this.searchSticker1=this.searchSticker;
    this.stickerService.requestSticker(this.searchSticker1.stickerInput);
    this.thisSearchSticker=this.stickerService.searchedSticker;    
    this.searchSticker=new SearchedSticker('');
  }

  constructor(private stickerService:RequestStickerService) { }

  ngOnInit(): void {
  }

}
