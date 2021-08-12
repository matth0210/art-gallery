import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { skip, tap } from 'rxjs/operators';
import { ImagesPerPage, InfiniteScrollerBase, SearchService } from '../common';
import { DialogComponent } from '../common/dialog/dialog.component';
import { Photo } from '../models/photo';
import { PhotoEntityService } from '../photo/services';
import { loadCuratedAction } from './actions';
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
          style({opacity: 0}),
          animate(
              "800ms ease-in",
              style({ opacity: 1})
          )
      ])
    ])
  ]
})
export class PhotoComponent extends InfiniteScrollerBase implements OnInit, OnDestroy {

  public images$: Observable<Photo[]>;
  public size = 'large';
  private searchSub: Subscription;
  private dialogRef: MatDialogRef<DialogComponent<Photo>>;
  public loading$: Observable<boolean>;
  public newSearch$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private searchService: SearchService, public photoService: PhotoEntityService, private dialog: MatDialog) {
    super();
  }

  public ngOnInit(): void {
    this.loading$ = this.photoService.loading$.pipe(
      tap((loading) => {
        if (!loading) {
          setTimeout(() => {
            this.newSearch$.next(false);
          });
        }
      })
    );
    this.calculateTotalNumberOfImages();
    this.images$ = this.photoService.entities$;
    this.searchService.searchValue.pipe(skip(1)).subscribe(() => {
      this.search();
    })
    this.photoService.errors$.pipe(
      tap(() => {
        this.newSearch$.next(true);
      })
    )
  }
  
  public search(perPage=ImagesPerPage, page=0) {
    this.newSearch$.next(true);
    this.photoService.clearCache();
    this.photoService.getWithQuery(`${this.searchService.searchValue.value}&per_page=${perPage}&page=${page}`);
  }

  public loadNextPage(perPage=ImagesPerPage) {
    this.photoService.setLoading(true);
    if(this.searchService.searchValue.value) {
      this.photoService.getWithQuery(`${this.searchService.searchValue.value}&per_page=${perPage}&page=${this.currentPage += 1}`);
    } else {
      this.photoService.dispatch(loadCuratedAction({
        perPage,
        page: this.currentPage += 1
      }));
    }
    this.calculateTotalNumberOfImages();
  }

  public openDialog(image: Photo): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: image
    }) as MatDialogRef<DialogComponent<Photo>>;
  }

  public ngOnDestroy(): void {
    if (this.searchSub) {
      this.searchSub.unsubscribe();
    }
  }
}
