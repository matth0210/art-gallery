import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { InfiniteScrollerBase } from './infinite-scroller/infinite-scroller.component';

export { InfiniteScrollerBase };
export { SearchService } from './services';
export * from './constants';


@NgModule({
    declarations: [
        DialogComponent,
        InfiniteScrollerBase
    ],
    imports: [
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [
        DialogComponent
    ],
    entryComponents: [
        DialogComponent
    ]
})
export class AppCommonModule {}