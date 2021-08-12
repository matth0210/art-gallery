import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ImagesPerPage, SearchService } from '../common';
import { Photo } from '../models/photo';
import { PhotoEntityService } from '../photo/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
}
