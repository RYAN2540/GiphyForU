import { Component, OnInit } from '@angular/core';
import { TrendingServiceService } from './../../services/TrendingService/trending-service.service'
import { Trending } from 'src/app/models/TrendingGIF/trending';


@Component({
  selector: 'app-giphy-fd-home',
  templateUrl: './giphy-fd-home.component.html',
  styleUrls: ['./giphy-fd-home.component.css']
})
export class GiphyFDHomeComponent implements OnInit {
  trending:Trending;

  constructor(private trendingService:TrendingServiceService) { }

  ngOnInit() {
    this.trendingService.trendingRequest();
    this.trending=this.trendingService.trending;
  }

}
