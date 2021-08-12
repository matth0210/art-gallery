import { Component } from '@angular/core';
import { SearchService } from '../common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public searchValue: string = '';
  constructor(public searchService: SearchService) { }
}
