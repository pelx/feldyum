import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileArticleComponent } from './profile-article/profile-article.component';
import { ProfileFavoritesComponent } from './profile-favorites/profile-favorites.component';



@NgModule({
  declarations: [
    ProfileArticleComponent,
    ProfileFavoritesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
