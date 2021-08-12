import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Photo } from './../../models/photo';

@Injectable()
export class PhotoEntityService extends EntityCollectionServiceBase<Photo>{

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Photo', serviceElementsFactory);
    }
}