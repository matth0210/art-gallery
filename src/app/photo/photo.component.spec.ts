import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Photo } from '../models/photo';
import { PhotoModule, photoEntityMetadata } from './index';

import { PhotoComponent } from './photo.component';
import { PhotoDataService, PhotoEntityService } from './services';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  const image: Photo = {
      id: 1,
      width: 200,
      height: 100,
      url: '',
      photographer: 'Matt Hall',
      photographer_url: '',
      photographer_id: 1,
      avg_color: '#0000FF',
      src: [{ large: ''}]
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoComponent ],
      imports: [
        PhotoModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(photoEntityMetadata),
        NoopAnimationsModule
      ],
      providers: [
        PhotoDataService,
        PhotoEntityService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
