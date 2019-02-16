export interface StoreVO {
    storeid:number;
    name:string;
}
export interface StoreLocationVO {
    locationid:number;
    locationAddress:string;
    locationName:string;
}
export interface Store {
    storeid:string;
    name:number;
}
export interface SearchResult{
    productName: string;
    categoryName: string;
    categoryDescription: string;
    productDescription: string;
    aisleName:string;
    aisleDescription:string;
}

export interface User{
    count: string;
    next: string;
    previous: string;
    results: Result[];
}
export interface Result{
    pk: string;
    first_name: string;
    last_name: string;
    profile:Profile;
}
export interface Profile{
    pk: string;
    gender:string;
}