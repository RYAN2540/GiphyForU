import { Injectable } from '@angular/core';
import { SearchedGif } from './../../models/SearchedGif/searched-gif';
import { HttpClient } from '@angular/common/http';
import {environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestGifService {
  searchedGif:SearchedGif;

  requestGif(input:string){

    interface ApiResponse{
      data:any;      
    }
    
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(`${environment.gifBase}${input}${environment.gifEnd}`).toPromise().then(response=>{
        let popLength=this.searchedGif.searchGifURL.length;

        for(let index=0; index<popLength; index++){
          this.searchedGif.searchGifURL.pop();
        }
        
        for (let item of response.data){
          this.searchedGif.searchGifURL.push(item.images.fixed_width.url);
        }
        
        resolve()
      },
      error=>{
        this.searchedGif.searchGifURL.push('https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif');        

        reject(error)
      })
    })
    return promise;

  }  

  constructor(private http:HttpClient) { 
    this.searchedGif=new SearchedGif('');
  }

  
}
