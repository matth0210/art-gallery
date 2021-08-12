import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { PhotoDataService } from './services/photo-data.service';
import { PhotoEntityService } from './services/photo-entity.service';
import { PhotoComponent } from './photo.component';
import { AppCommonModule } from '../common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
export * from './actions'

export const photoEntityMetadata: EntityMetadataMap = {
    Photo: {
        
    }
}

@NgModule({
    declarations: [
        PhotoComponent,
    ],
    imports: [
        CommonModule,
        AppCommonModule,
        InfiniteScrollModule,
    ],
    providers: [
        PhotoEntityService,
        PhotoDataService,
    ]
})
export class PhotoModule {
    constructor(private entityDefService: EntityDefinitionService,
        private entityDataService: EntityDataService,
        private photoDataService: PhotoDataService,
    ) {
        this.entityDefService.registerMetadataMap(photoEntityMetadata);
        this.entityDataService.registerService('Photo', this.photoDataService);
    }
}