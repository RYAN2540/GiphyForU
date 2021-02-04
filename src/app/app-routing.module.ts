import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifSearchComponent } from './components/gif-search/gif-search.component';
import { StickerSearchComponent } from './components/sticker-search/sticker-search.component';


const routes: Routes = [
  { path: 'gifs', component: GifSearchComponent},
  { path: 'stickers', component: StickerSearchComponent},
  { path: '', redirectTo:"/gifs", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
