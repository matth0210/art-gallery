import { Component } from "@angular/core";
import { ImagesPerPage } from "../constants";

@Component({
  selector: 'app-infinite-scroller',
  template: '',
})
export class InfiniteScrollerBase {
  public numberOfColumns = 4;
  public currentPage = 0;
  public numberOfImagesPerColumn: number;
  public totalNumberOfImages: number;
  public remainingImageCount: number;

  constructor() {}

  public calculateTotalNumberOfImages(imagesPerPage = ImagesPerPage): void {
    this.totalNumberOfImages = this.currentPage > 0 ? this.currentPage * imagesPerPage : imagesPerPage;
    this.numberOfImagesPerColumn = Math.floor(this.totalNumberOfImages / this.numberOfColumns);
    this.remainingImageCount = imagesPerPage % this.numberOfColumns;
  }

  public loadNextPage(itemsPerPage?: number) {};
}

