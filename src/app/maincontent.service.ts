import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class MaincontentService {

  constructor(private http: HttpClient) { }
  getTitle(): Observable<string> {
    return of("Aisle Finder");
  }
  getStores(): Observable<Map<string, string>> {
    var stores: Map<string, string> = new Map<string, string>();
    let ABOUT = "ABOUT";
    stores.set("COSTCO", "1");
    stores.set("BEST BUY", "2");
    stores.set("HOME DEPOT", "3");
    return of(stores);
  }


  getStoreLocation(storeid: string): Observable<Map<string, string>> {
    let headers = new HttpHeaders();
   headers = headers.set('Access-Control-Allow-Origin','*');
    const url='http://localhost:8080/store';
   var s= this.http.get<Object[]>(url,{headers: headers}).subscribe(data => console.log(data));;
 
    var location: Map<string, string> = new Map<string, string>();
    console.log("store id " + storeid)
    if (storeid === "1") {
      console.log("getting data for store id " + storeid)
      location.set( "HEARTLAND","1",);
      location.set( "DIXIE","2");
    } else if (storeid === "2") {
      console.log(" getting data for store id " + storeid)
      location.set("HEARTLAND","3");
      location.set("BRAMLEA","4");
    }
    return of(location);
  }
}
