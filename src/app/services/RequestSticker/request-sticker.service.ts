import { Injectable } from '@angular/core';
import { SearchedSticker } from './../../models/SearchedSticker/searched-sticker';
import { HttpClient } from '@angular/common/http';
import {environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestStickerService {

  searchedSticker:SearchedSticker;

  requestSticker(input:string){

    interface ApiResponse{
      data:any;      
    }
    
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(`${environment.stickerBase}${input}${environment.stickerEnd}`).toPromise().then(response=>{
        let popLength=this.searchedSticker.searchStickerURL.length;

        for(let index=0; index<popLength; index++){
          this.searchedSticker.searchStickerURL.pop();
        }
        
        for (let item of response.data){
          this.searchedSticker.searchStickerURL.push(item.images.fixed_width.url);
        }
        
        resolve()
      },
      error=>{
        this.searchedSticker.searchStickerURL.push('https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif');        

        reject(error)
      })
    })
    return promise;

  }  


  constructor(private http:HttpClient) { 
    this.searchedSticker=new SearchedSticker('');
  }
}
