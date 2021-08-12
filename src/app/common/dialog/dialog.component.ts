import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FileDownloadService } from "../services/file-download.service";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
  })
  export class DialogComponent<T> {
    constructor(@Inject(MAT_DIALOG_DATA) public data: T, public fileDownloadService: FileDownloadService) {}
  }