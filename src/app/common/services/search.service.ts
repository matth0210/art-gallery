import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    public previousSearch = '';
    public searchValue: BehaviorSubject<string> = new BehaviorSubject<string>(this.previousSearch);
    public search(value: string): void {
        if (value !== this.previousSearch) {
            this.previousSearch = value;
            this.searchValue.next(value);
        }
    }    
}