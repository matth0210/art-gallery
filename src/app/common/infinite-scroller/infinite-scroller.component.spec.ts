import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollerBase } from './infinite-scroller.component';

describe('InfinteScrollerBaseComponent', () => {
  let component: InfiniteScrollerBase;
  let fixture: ComponentFixture<InfiniteScrollerBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteScrollerBase ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollerBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate an even number of images per column', () => {
    component.numberOfColumns = 4;
    component.currentPage = 0;
    component.calculateTotalNumberOfImages(30);
    expect(component.numberOfImagesPerColumn).toEqual(7);
    expect(component.remainingImageCount).toEqual(2);
    
    component.numberOfColumns = 4;
    component.currentPage = 0;
    component.calculateTotalNumberOfImages(60);
    expect(component.numberOfImagesPerColumn).toEqual(15);
    expect(component.remainingImageCount).toEqual(0);
  });
});
