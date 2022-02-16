import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getProducts(){
    return this.http.get<any>("https://fakestoreapi.com/products")
                .pipe(map
                  ((res:any)=>{
                    return res;
                },(error:HttpErrorResponse)=>{
                  alert(error.message);
                }
                ))
  }
}
