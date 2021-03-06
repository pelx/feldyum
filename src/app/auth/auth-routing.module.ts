import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,  } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AuthRoutingModule { }
