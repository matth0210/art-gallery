import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { DefaultDataService, EntityActionOptions, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImagesPerPage } from 'src/app/common';
import { environment } from 'src/environments/environment';
import { Photo } from './../../models/photo';

@Injectable()
export class PhotoDataService extends DefaultDataService<Photo> {
    readonly searchUrl = `${environment.api}/search`;
    readonly currated = `${environment.api}/curated`;
    readonly headers = new HttpHeaders().set('authorization', environment.API_KEY);

    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Photo', http, httpUrlGenerator);
    }

    public getById(key: any, options?: EntityActionOptions): Observable<Photo> {
        return this.http.get<Photo>(`${this.entitiesUrl}${key}`, {headers: this.headers});
    }
    
    public getWithQuery(queryParams: string, options?: EntityActionOptions): Observable<Photo[]> {
        return this.http.get<{photos: Photo[]}>(`${this.searchUrl}?query=${queryParams}`, {headers: this.headers}).pipe(
            map((res: {photos: Photo[]}) => res.photos),
        );
    }

    public getCurated(perPage=ImagesPerPage, page=0): Observable<Photo[]> {
        return this.http.get<{photos: Photo[]}>(`${this.currated}?per_page=${perPage}&page=${page}`, {headers: this.headers}).pipe(
            map((res: {photos: Photo[]}) => res.photos),
        );
    }
}