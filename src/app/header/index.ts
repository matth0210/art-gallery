import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { SearchService } from '../common/services/search.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class HeaderModule { }
