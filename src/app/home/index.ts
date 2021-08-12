import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoResolver } from '../photo/services';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'photos'
      },
      {
        path: 'photos',
        component: PhotoComponent,
        resolve: {
          photos: PhotoResolver
        }
      }
    ]
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HeaderModule,
    FormsModule,
    RouterModule.forChild(homeRoutes),
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
