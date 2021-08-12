import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { v4 as uuidv4 } from 'uuid';

@Injectable({
    providedIn: "root"
})
export class FileDownloadService {

    constructor(private http: HttpClient) {}

    /*
        Haven't done many file downloads in angular, so I used this resource
        https://newbedev.com/angular-how-to-download-a-file-from-httpclient
    */
    downloadFile(url: string): void{
        const headers = new HttpHeaders().set('authorization', environment.API_KEY);
        this.http.get(url, {headers, responseType: 'blob' as 'json'}).subscribe(
            (response: any) =>{
                let dataType = response.type;
                let binaryData = [];
                binaryData.push(response);
                let downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
                const randomFileName = uuidv4();
                downloadLink.setAttribute('download', randomFileName);
                document.body.appendChild(downloadLink);
                downloadLink.click();
            }
        )
    }
}