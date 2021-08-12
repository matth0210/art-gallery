import { Injectable } from "@angular/core";
import { EntityOp, MergeStrategy, ofEntityOp, ofEntityType } from "@ngrx/data";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, take, tap } from "rxjs/operators";
import { loadCuratedAction } from "../actions";
import { PhotoDataService } from "./photo-data.service";
import { PhotoEntityService } from "./photo-entity.service";

@Injectable()
export class PhotosEffect {

    constructor(
        private photoEntityService: PhotoEntityService,
        private photoDataService: PhotoDataService,
        private actions$: Actions) {}

    curated$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadCuratedAction),
            tap((action) => this.photoDataService.getCurated(action?.perPage, action?.page).pipe(
                take(1),
                map((photos) => {
                    this.photoEntityService.addManyToCache(photos, {
                        mergeStrategy: MergeStrategy.PreserveChanges
                    })
                    this.photoEntityService.setLoaded(true);
                    this.photoEntityService.setLoading(false);
                })
            ).subscribe())
        ),
        { dispatch: false }
    )
}