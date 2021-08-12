import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EntityOp } from "@ngrx/data";
import { Observable } from "rxjs";
import { filter, first, tap } from "rxjs/operators";
import { loadCuratedAction } from "../actions";
import { PhotoEntityService } from "./photo-entity.service";

@Injectable({
    providedIn: 'root'
})
export class PhotoResolver implements Resolve<boolean> {
 
    constructor(private photoEntityService: PhotoEntityService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.photoEntityService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.photoEntityService.dispatch(loadCuratedAction({}));
                    }
                }),
                filter(loaded => !!loaded),
                first(),
            )
    }
    
}