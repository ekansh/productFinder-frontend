import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {StoreVO,StoreLocationVO,Store, User} from  './model/store';
@Injectable()
export class MaincontentService {
  const 
  constructor(private http: HttpClient) { }
  getTitle(): Observable<string> {
    return of("Aisle Finder");
  }
  getStores(): Observable<StoreVO[]> {
    //var stores: Map<string, string> = new Map<string, string>();
    let url='/assets/response.json';
    url='http://18.191.140.98:8080/gs-accessing-data-rest/api/stores';
    let ele:StoreVO[];
    //let k=this.http.get<StoreVO[]>(url).subscribe(data => {ele=data;console.log(ele[0].name)});
    return this.http.get<StoreVO[]>(url);
    //ele =[{storeid:10,name:'astore'}];
    //let ABOUT = "ABOUT";
    //stores.set("COSTCO", "1");
    //stores.set("BEST BUY", "2");
    //stores.set("HOME DEPOT", "3");
    //return of(ele);
  }


  getStoreLocation(storeid: number): Observable<StoreLocationVO[]> {
    //let headers = new HttpHeaders();
    //headers = headers.set('Access-Control-Allow-Origin','*');
    let url='http://18.191.140.98:8080/gs-accessing-data-rest/api/storeslocation/'+storeid;
    console.log("calling url "+url);
    return this.http.get<StoreLocationVO[]>(url);
    //var s= this.http.get<Object[]>(url,{headers: headers}).subscribe(data => console.log(data));;
 /**
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
    */
  }
}
