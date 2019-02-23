import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { StoreVO, StoreLocationVO, Store, User, SearchResult } from './model/store';

const prodductFinderBackendUrl: string = 'https://18.191.140.98:8443/gs-accessing-data-rest';
//const prodductFinderBackendUrl: string = 'http://localhost:8080'
@Injectable()
export class MaincontentService {

  constructor(private http: HttpClient) { }
  getTitle(): Observable<string> {
    return of("Aisle Finder");
  }
  getStores(): Observable<StoreVO[]> {
    let url = '/assets/response.json';
    url = prodductFinderBackendUrl + '/api/stores';
    let ele: StoreVO[];
    //let k=this.http.get<StoreVO[]>(url).subscribe(data => {ele=data;console.log(ele[0].name)});
    return this.http.get<StoreVO[]>(url);

  }


  getStoreLocation(storeid: number): Observable<StoreLocationVO[]> {
    let url = prodductFinderBackendUrl+'/api/storeslocation/' + storeid;
    console.log("calling url " + url);
    return this.http.get<StoreLocationVO[]>(url);
    //var s= this.http.get<Object[]>(url,{headers: headers}).subscribe(data => console.log(data));;

  }
  getSearchResults(locationid:string, searchItem:string) : Observable<SearchResult[]> {
    let url = prodductFinderBackendUrl+'/searchat/storeslocation/' +locationid+ '?p='+searchItem;
    console.log("calling url " + url);
    return this.http.get<SearchResult[]>(url);
  }
}
