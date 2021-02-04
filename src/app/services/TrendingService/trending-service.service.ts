import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trending } from './../../models/TrendingGIF/trending';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendingServiceService {
  trending:Trending;

  constructor(private http:HttpClient) { 
    this.trending=new Trending([]);
  }

  trendingRequest(){
    interface ApiResponse{
      data:any;      
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.trendingBase).toPromise().then(response=>{
        for (let item of response.data){
          this.trending.gifURL.push(item.images.fixed_width.url);
        }
        
        resolve()
      },
      error=>{
        this.trending.gifURL.push('https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif');        

        reject(error)
      })
    })
    return promise
  }
}
